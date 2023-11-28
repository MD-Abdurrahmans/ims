import moment from "moment/moment";
import useSales from "../../../hooks/useSales"
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import Halmet from "../../../shared/helmet/Halmet";



const SalesHistory = () => {


  const [salesProducts] = useSales();


console.log(salesProducts)

  return (
    <div>

 <Halmet title={'Sale History'} ></Halmet>
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
 salesProducts?.sales?.map((sale,index)=><>
 

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




    </div>
  )
}

export default SalesHistory
