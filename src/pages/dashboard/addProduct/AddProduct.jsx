import { useForm } from "react-hook-form"
import upload from "../../../shared/upload"

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import {  useNavigate } from "react-router-dom";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import Halmet from "../../../shared/helmet/Halmet";
import Swal from "sweetalert2";


const AddProduct = () => {
const {manager,user} = useAuth();
const axiosSecure = useAxiosSecure();
const navigate = useNavigate();

console.log('m',manager?.email )
console.log('u',user?.email )
    const {
        register,
        handleSubmit,reset,
  
        formState: { errors },
      } = useForm()
    
      const onSubmit =async (data) => {
        console.log(data)
        const imgUrl = await upload(data.productImage[0])
        const imageHost = imgUrl.data.data.display_url;


         if(imgUrl){


             if(user?.email === manager?.OwnerEmail){
            const   vatAmount =  (parseFloat(data.ProductionCost * 7.5))/100;
   console.log('vat',vatAmount)
                // TODO: find out selling price,
                const productInfo  ={

                    productName: data.productName,
                    ProductionCost: parseInt(data.ProductionCost),
                    productDescription: data.productDescription             ,
                    productDiscount: data.productDiscount             ,
                    productLocation: data.productLocation,
                    profit: data.profit,
                    productQuantity: parseInt(data.productQuantity),
                    productImage: imageHost,
                    shopId:manager._id,
                    shopName:manager.shopName,
                    email:user?.email,
            

                    sellingPrice: parseFloat(data?.ProductionCost) + parseFloat(vatAmount) + parseFloat(data?.profit),

                    addDate: new Date(),
                    saleCount:0,
                     
               }



       const  res = await         axiosSecure.post(`/addProducts/${manager._id}`,productInfo)


        console.log('info', productInfo)
        console.log('addProduct', res)

         if(res.data.status =='limited'){

            //  alert("limited");

             Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Please Pay for Increase Your Limit.limit overload",
            
            });
             navigate('/dashboard/subsCription')
         }else{

             if(res.data.result){

                //  alert("product added")
                 Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Product Added ",
                  showConfirmButton: false,
                  timer: 1500
                });
                reset();
                navigate('/dashboard/productManagement')
            }
         }

         


             }

     

      



         }


      }
  return (
    <div>
          <Halmet title={'addProduct'} ></Halmet>
      
      <div className="my-10">
        <SectionTitle  heading={'ADD PRODUCT'} subHeading={'FillUp The Form'} ></SectionTitle>
      </div>


       <form  onSubmit={handleSubmit(onSubmit)} >

       <div className="grid md:grid-cols-2 gap-2">

{/* product Name */}
       <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text" {...register('productName')}  placeholder="Product Name" className="input input-bordered" required />
        
        </div>

{/* product Image */}
       <div className="form-control">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input type="file" {...register('productImage')}  placeholder="Product Image" className="input input-bordered" required />
        
        </div>


{/* product Quantity */}
       <div className="form-control">
          <label className="label">
            <span className="label-text">Product Quantity</span>
          </label>
          <input type="number" {...register('productQuantity')}  placeholder="Product Quantity" className="input input-bordered" required />
        
        </div>


{/* product Location */}
       <div className="form-control">
          <label className="label">
            <span className="label-text">Product Location</span>
          </label>
          <input type="text" {...register('productLocation')}  placeholder="Product Location" className="input input-bordered" required />
        
        </div>
{/* ProductionCost*/}
       <div className="form-control">
          <label className="label">
            <span className="label-text">ProductionCost</span>
          </label>
          <input type="number" {...register('ProductionCost')}  placeholder="ProductionCost" className="input input-bordered" required />
        
        </div>

{/* product Price*/}
       <div className="form-control">
          <label className="label">
            <span className="label-text">profit </span>
          </label>
          <input type="number" {...register('profit')}  placeholder="product Price" className="input input-bordered" required />
        
        </div>


{/* product Discount*/}
       <div className="form-control">
       <label className="label">
            <span className="label-text">product Discount</span>
          </label>
          <select {...register('productDiscount')}  className="select select-bordered w-full max-w-xs">
  <option disabled selected>Who shot first?</option>
  <option value='10'>10%</option>
  <option value='20'>20%</option>
</select>
        
        </div>

{/* product Description*/}
       <div className="form-control">
       <label className="label">
            <span className="label-text">Product Description
</span>
          </label>

<textarea  className="border" id="" cols="5" placeholder="product Description" {...register('productDescription')}  rows="5"></textarea>
        
        </div>








</div>  


<div className="my-11">
     <button className="btn w-full btn-outline">Add  product</button>
</div>
       </form>
       
    </div>
  )
}

export default AddProduct
