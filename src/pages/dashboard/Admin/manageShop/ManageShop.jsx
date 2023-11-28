
import { FaAd } from "react-icons/fa";
import useShops from "../../../../hooks/useShops"
import SectionTitle from "../../../../shared/sectionTitle/SectionTitle";
import Halmet from "../../../../shared/helmet/Halmet";


const ManageShop = () => {

    const [shops] = useShops();

    

  return (
    <div>
          <Halmet title={'manageShop'} ></Halmet>
  

 <div className="my-11">
 <SectionTitle heading={'MANAGE SHOPS'} subHeading={'Monitor Shops'} ></SectionTitle>


 </div>


         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className=" bg-yellow-400  text-white">
      <tr>
         <th>Shop Logo</th>
        <th>Shop Name</th>
        <th>Product Limit</th>
        <th>Shop Description</th>
        <th>Message</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
     {
        shops?.map((shop)=><>
         <tr className="hover:bg-slate-600 text-black hover:text-white w-full">
       
       <td>
         <div className="flex items-center gap-3">
           <div className="avatar">
             <div className="mask mask-squircle w-12 h-12">
               <img src={shop?.shopLogo} alt="Avatar Tailwind CSS Component" />
             </div>
           </div>
       
         </div>
       </td>
       <td>
         {
            shop?.shopName
         }
         <br/>
         
       </td>
       <td>
         {
            shop?.addLimit
         }
       </td>
       <td>
           <div>
            {
                shop?.shopDescription || 'nothing'
            }
           </div>
       </td>

{/* TOD:CLICK THE NOTICE SEND A EMAIL FROM THE SHOP OWNER  */}
       <td>
         <button className="btn btn-sm bg-warning">Notice</button>
       </td>
     </tr>
        </>)
     }
  
    </tbody>
    {/* foot */}

  </table>
</div>
    </div>
  )
}

export default ManageShop
