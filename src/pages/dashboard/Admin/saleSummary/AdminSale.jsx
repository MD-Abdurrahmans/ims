
import useAdminBoard from "../../../../hooks/useAdminBoard";
import useRole from "../../../../hooks/useRole"
import { LiaSitemapSolid } from "react-icons/lia";
import { TbSitemap } from "react-icons/tb"
import { FcSalesPerformance } from "react-icons/fc";
import { GrProductHunt } from "react-icons/gr";
import SectionTitle from "../../../../shared/sectionTitle/SectionTitle";
import Halmet from "../../../../shared/helmet/Halmet";

// cart
import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';



const AdminSale = () => {
  const [Roles] = useRole();
  const [adminStat] = useAdminBoard();
console.log('stats',adminStat)
  let price = 0;
  
  if(Roles?.role == 'admin'){

    price += Roles?.balance;  
  }
  const data = [
    {
      name: 'Balance',
      uv: price,
      pv: price,
      amt: price,
      cnt: price,
    },
    {
      name: 'Total Product',
      uv: adminStat?.totalProducts,
      pv: adminStat?.totalProducts,
      amt:adminStat?.totalProducts,
      cnt: adminStat?.totalProducts,
    },
    {
      name: 'Total Sale Qty',
      uv: adminStat?.salesCollections,
      pv: adminStat?.salesCollections,
      amt:adminStat?.salesCollections,
      cnt: adminStat?.salesCollections,
    },


  ];





  return (
    <div>
          <Halmet title={'saleSummary'} ></Halmet>


       <SectionTitle heading={'Sales Summary'} subHeading={'MONITORING STOCK'} ></SectionTitle>
<div>
<div className="shadow grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
  
  <div className="stat bg-[#22D3EE] text-center">
    <div className="stat-figure text-yellow-400">
     <FcSalesPerformance className="md:text-4xl"/>
    </div>
    <div className="stat-title md:text-3xl">Total Income</div>
    <div className="stat-value"><span className="text-yellow-400">$</span> {price}</div>
    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
  </div>
  
  <div className="stat bg-[#0D9488] text-white">
    <div className="stat-figure text-secondary">
     <TbSitemap className="text-4xl"/>
    </div>
    <div className="stat-title md:text-3xl">  Total product</div>
    <div className="stat-value flex"> <span className="text-yellow-400 mr-2"><LiaSitemapSolid></LiaSitemapSolid></span>  {adminStat?.totalProducts}</div>
    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
  </div>
  
  <div className="stat bg-[#FACC15]">
    <div className="stat-figure text-secondary">
    <span className="text-yellow-400 text-4xl mr-2" ><GrProductHunt></GrProductHunt></span>
    </div>
    <div className="stat-title md:text-3xl ">  Total Slae</div>
    <div className="stat-value flex"><span className="text-yellow-400 mr-2" ><GrProductHunt></GrProductHunt></span>  {adminStat?.salesCollections}</div>
    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
  </div>
  
</div>
</div>


{/* chart start */}

<div>

<ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
</div>
    </div>
  )
}

export default AdminSale
