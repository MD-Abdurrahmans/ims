import { useEffect, useState } from "react";
import useShops from "../../../../hooks/useShops";
import useUsers from "../../../../hooks/useUsers"
import SectionTitle from "../../../../shared/sectionTitle/SectionTitle";
import Halmet from "../../../../shared/helmet/Halmet";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const Users = () => {
   const [shops]= useShops();
    const [users] = useUsers();
   const [shopInfo,setShopinfo] = useState();

   const axiosSecure =useAxiosSecure();
   const [mails,setMails] = useState(false);




    useEffect(()=>{

        
        const shoMatched = users?.map((user)=>{

            const email =  user.email;

            const shopEmail = shops?.find((shop)=>shop.OwnerEmail === email);


        
             return shopEmail




        })

        setShopinfo(shoMatched)

    },[])
   
    // console.log(shopInfo)






 const shopDetail = shopInfo?.map((shop)=>shop)



//  email 


const handlePromotion = async(e)=>{

  e.preventDefault();

   const form = e.target;

   const to = form.to.value;
  //  const from = form.from.value;
   const message = form.message.value;
   const subject = form.subject.value;
const emails =  {to,message,subject};
   console.log(emails)
   

   if(emails){

    const res = await axiosSecure.post('/sendPromotion',emails);


   console.log('proM',res.data)

   if(res.data?.mail){

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your message  send Successful",
      showConfirmButton: false,
      timer: 1500
    });

    setMails(true)

   }
   }




}

 



    


    return (
    <div>
          <Halmet title={'Users'} ></Halmet>



<div>

<div className="my-10">
 <SectionTitle heading={'ALL REGISTER USERS'} subHeading={'Monitor Users'} ></SectionTitle>

 </div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-yellow-400 text-white">
      <tr>
        <th></th>
        <th>User Name</th>
        <th>User Email</th>
        <th>Shop Namer</th>
        <th>Role</th>
        <th>message</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
 
{/* apply send promotional email send  */}



   {
   
    users?.map((user,index)=>
    
    <>

    <tr className="hover:bg-slate-400  hover:text-white cursor-pointer">
        <th>{index +1}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>{user?.shopName? user?.shopName: 'not shop yet'}</td>
        <td>{user?.role}</td>
       
        {
          user?.role =='guest'&&

          <td>
          <button className="btn btn-xs hover:bg-yellow-400 bg-[#06B6D4] text-white " onClick={()=>document.getElementById('my_modal_5').showModal()}>Send notice</button>
  
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle bg-[#4B5563] text-white">
    <div className="modal-box bg-black">
      <h3 className="font-bold text-lg">Send message</h3>

      <form   onSubmit={handlePromotion}    className="">
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="">Email Address to</label>
      <input name="to" type="text"  className="p-2 w-full text-black"  />

    
      {/* from */}
    <div className="my-6">
    <label htmlFor="">Subject</label>
      <input  name="subject" className="p-2 w-full text-black" />
    </div>

      <label htmlFor="">Message</label>

     <textarea name="message"  className="textarea textarea-primary w-full text-black"   ></textarea>
{
   mails ?
   <input type="button" value={'Sent'} className="w-full bg-[#22C55E] py-2" /> : 
   <input type="submit" value={'Send'} className="w-full bg-[#0284C7] py-2" />
}
    </form>



      <div className="modal-action">

        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Close</button>
        </form>



      </div>
        
    </div>
  </dialog>
          </td>
        
        }
        

 

      </tr>
    </>)
   }
  
    </tbody>
  </table>
</div>
</div>

{/* modal  */}




    </div>
  )
}

export default Users
