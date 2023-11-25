import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SubsCheck from "../../pages/dashboard/subsCription/SubsCheck";



const PriceModal = ({price}) => {



    const stripePromise = loadStripe('pk_test_51OEBh5JPntNfPAY00OBktyZA117urdBppg1WFTrvFVSMEOUMysVNkL4AGDAL5ox2Yh8b39N4mBCOk0z8T4glb0fa00Wbwi4MXd');
  return (
    <div>
				<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Get Started</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box ">
  <Elements stripe={stripePromise}>
     
<SubsCheck amount={price} >

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
  )
}

export default PriceModal
