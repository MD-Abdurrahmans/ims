import { Elements } from "@stripe/react-stripe-js";
import Container from "../../../shared/Container"
import { loadStripe } from "@stripe/stripe-js";
import SubsCheck from "./SubsCheck";
import { useState } from "react";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import Halmet from "../../../shared/helmet/Halmet";




const SubsCription = () => {
 const [prices,setPrices] = useState(null) 
	const stripePromise = loadStripe('pk_test_51OEBh5JPntNfPAY00OBktyZA117urdBppg1WFTrvFVSMEOUMysVNkL4AGDAL5ox2Yh8b39N4mBCOk0z8T4glb0fa00Wbwi4MXd');


// handle payments 

console.log(prices)

  return (
    <div>
          <Halmet title={'subsCription'} ></Halmet>

       <Container>

       <section className="py-20 dark:bg-gray-800 dark:text-gray-100">


	<div className="container px-4 mx-auto">

		

	<div className="my-9">
	<SectionTitle heading={'Subscription'} subHeading={'CHOSE YOUR PLAN'}  ></SectionTitle>
</div>

		<div className="">

			<div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-4">
{/* b */}
				<div className="flex flex-grow flex-col p-6 bg-yellow-400  hover:bg-yellow-400 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Beginner</h4>
						<span className="text-6xl font-bold">$10</span>
					</div>
					
					<ul className="flex-1 mb-6 dark:text-gray-400">
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Add Limit 200</span>
						</li>
					
					</ul>

{/* modal */}

<div  onClick={()=>setPrices(10)}>
 <button className="btn w-full" onClick={()=>document.getElementById('my_modal_1').showModal()}>Get Started</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box ">
  <Elements stripe={stripePromise}>
     
<SubsCheck amount={10}  >

</SubsCheck>
    </Elements>
    {/* <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p> */}
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
 </div>

				</div>





{/* pro */}

<div className="flex flex-grow flex-col p-6 hover:bg-yellow-400 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Pro</h4>
						<span className="text-6xl font-bold">$20</span>
					</div>
					
					<ul className="flex-1 mb-6 dark:text-gray-400">
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Add Limit 450</span>
						</li>
					
					</ul>

{/* modal */}

<div  onClick={()=>setPrices(20)}>
 <button className="btn w-full" onClick={()=>document.getElementById('my_modal_2').showModal()}>Get Started</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box ">
  <Elements stripe={stripePromise}>
     
<SubsCheck amount={20}  >

</SubsCheck>
    </Elements>
    {/* <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p> */}
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
 </div>


				</div>

				





{/* advance */}


<div className="flex flex-grow flex-col p-6 hover:bg-yellow-400 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Advance</h4>
						<span className="text-6xl font-bold">$50</span>
					</div>
					
					<ul className="flex-1 mb-6 dark:text-gray-400">
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Add Limit 1500</span>
						</li>
					
					</ul>

{/* modal */}

 <div  onClick={()=>setPrices(50)}>
 <button className="btn w-full" onClick={()=>document.getElementById('my_modal_3').showModal()}>Get Started</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box ">
  <Elements stripe={stripePromise}>
     
<SubsCheck amount={prices}  >

</SubsCheck>
    </Elements>
    {/* <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p> */}
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
 </div>


				</div>


			</div>


		


		</div>

	</div>
</section>
       </Container>
    </div>
  )
}

export default SubsCription
