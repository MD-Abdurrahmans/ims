import moment from "moment/moment";
import useSales from "../../../hooks/useSales"
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const SalesHistory = () => {
  const axiosSecure = useAxiosSecure();
  const {user,manager} = useAuth();
    const [salesProducts] = useSales();
    const  saleses = salesProducts.sales;
// console.log(saleses)
 const [perPage,setPerPage] = useState(5);
 const [currentValue,setCurrentValue] = useState(0);
 const pageNumber = Math.ceil(saleses?.length/perPage);
 const pages = [...Array(pageNumber).keys()]
 const [item,setItem] = useState();


 useEffect(()=>{
 axiosSecure.get(`/sales/${manager._id}?page=${currentValue}&size=${perPage}`)
 .then((res)=>{
  
  // console.log(res.data.sales)

   setItem(res.data.sales)

})
         
 },[currentValue])


 console.log('ii', item)
// handle btn 

const handleBtn =(e)=>{

   e.preventDefault();
const value =  parseInt(e.target.value);
 console.log(e.target.value)
 setCurrentValue(value)

}



  return (
    <div>


<div>
<div className="my-11"> 

<SectionTitle heading={'SALE HISTORY'} subHeading={'HISTORY'}></SectionTitle>
</div>

    
    <div className="overflow-x-auto">
<table className="table table-zebra">
 {/* head */}
 <thead className="bg-yellow-400 text-white">
   <tr>
     <th></th>
     <th>Product Name</th>
     <th>Sale Date</th>
     <th>Profit</th>
   </tr>
 </thead>
 <tbody>
   {/* row 1 */}

 
 {/* TODO:MAKEUP THIS ALL ORDER IN DATE SORTING ORDER  */}

{
 item?.map((sale,index)=><>
 

 <tr className="hover:bg-slate-500 hover:text-white" >
     <th>{index +1}</th>
     <td>{sale?.productName}</td>
     <td>{moment(sale?.addDate).format('MMMM Do YYYY, h:mm:ss a')}</td>
     <td>${( sale?.sellingPrice - sale?.ProductionCost ).toFixed(2)}</td>
   </tr>

 </>)
}
 


 </tbody>
</table>
</div>

</div>


 {/* pagination */}


 <div className="max-w-md mx-auto my-9" >
 <span className="text-3xl font-bold">pages: </span>
 {
    pages?.map((page)=><>
    <button onClick={handleBtn} className={`btn btn-outline ${currentValue === page ? 'bg-yellow-400 text-white':''}`}  value={page} >{page}</button>
    </>)
  }
 </div>

    </div>
  )
}

export default SalesHistory
