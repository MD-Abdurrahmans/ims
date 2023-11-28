import useSales from "../../../hooks/useSales"
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import { MdPointOfSale } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

// chart

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
  ResponsiveContainer,
} from 'recharts';


const SalesSummary = () => {

  const [salesProducts] = useSales();
  console.log('tottt',salesProducts)

 const profit =  salesProducts?.totalSalePrice - salesProducts?.productionCost;
  const data = [
  
    {
      name: 'Invest',
      uv: salesProducts?.productionCost,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Profit',
      uv: `${profit}`,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Income',
      uv:  `${salesProducts?.totalSalePrice}`,
  
      pv: 1098,
      amt: 989,
    },
  
  ];





  
  return (
    <div className="">
          

 <div>

  
 <div className="my-8">
             <SectionTitle heading={'Sales Summary'}  subHeading={'MONITOR ALL SALES'} ></SectionTitle>
           </div>

 <div className="grid  grid-cols-1 md:grid-cols-2">
  


  <div className=" p-8 bg-amber-500 text-white">
    <div className="stat-figure text-secondary">
<MdPointOfSale className="text-4xl text-white"/>
    </div>
    <div className="stat-title text-3xl">Total Sale</div>
    <div className="stat-value">QTY:{salesProducts?.quantity}</div>
    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
  </div>
  
  <div className="p-8  bg-orange-600 text-white">
    <div className="stat-figure text-secondary">
    <RiMoneyDollarCircleFill className="text-4xl text-white"/>
    </div>
    <div className="stat-title text-3xl">Total Invest</div>
    <div className="stat-value"> $ {salesProducts?.productionCost.toFixed(2)}</div>
    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
  </div>
  
  <div className="  p-10  bg-green-500">
    <div className="stat-figure text-secondary">
    <FaMoneyBillTrendUp className="text-4xl text-white"/>
    </div>
    <div className="stat-title text-3xl">Total Profit</div>
    <div className="stat-value">${salesProducts?.totalSalePrice.toFixed(2)-salesProducts?.productionCost}</div>
    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
  </div>
  
  
  <div className="p-8    bg-[#A3E635]">
    <div className="stat-figure text-secondary">
    <FaMoneyBillTrendUp className="text-4xl text-white"/>
    </div>
    <div className="stat-title text-3xl">Total Income</div>
    <div className="stat-value">${salesProducts?.totalSalePrice.toFixed(2)}</div>
    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
  </div>
  
</div>


 </div>


{/* chart start */}

<div className="w-full my-12">
<ComposedChart
          width={800}
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
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
 
</div>

    </div>
  )
}

export default SalesSummary
