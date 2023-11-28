import { useEffect, useState } from "react";
import useShops from "../../../../hooks/useShops";
import useUsers from "../../../../hooks/useUsers"
import SectionTitle from "../../../../shared/sectionTitle/SectionTitle";
import Halmet from "../../../../shared/helmet/Halmet";


const Users = () => {
   const [shops]= useShops();
    const [users] = useUsers();
   const [shopInfo,setShopinfo] = useState();





    useEffect(()=>{

        
        const shoMatched = users?.map((user)=>{

            const email =  user.email;

            const shopEmail = shops?.find((shop)=>shop.OwnerEmail === email);


        
             return shopEmail




        })

        setShopinfo(shoMatched)

    },[])
   
    console.log(shopInfo)






 const shopDetail = shopInfo?.map((shop)=>shop)




    


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
        <td><button className="btn btn-xs hover:bg-yellow-400 ">Promotion</button></td>
      </tr>
    </>)
   }
  
    </tbody>
  </table>
</div>
</div>




    </div>
  )
}

export default Users
