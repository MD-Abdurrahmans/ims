import Container from "../../shared/Container"
import Halmet from "../../shared/helmet/Halmet"
import CalltoAction from "./components/CalltoAction"
import ContactUs from "./components/ContactUs"
import Faq from "./components/Faq"
import Plane from "./components/Plane"
import Team from "./components/Team"
import Banner from "./components/banner"


const Home = () => {
  return (
    <div  >
          <Halmet title={'Home'} ></Halmet>
  
  {/* banner */}
  <div className="h-[100vh]">
  <Banner/>
  </div>


 <div className="my-10">
 <Container>

{/* call to action */}

<CalltoAction/>


{/* PLAN */}

<Plane/>

{/* testimonial */}
{/* <Testimonial/> */}

{/* team */}

<Team/>

{/* FAQ? */}
<Faq/>

{/* contact us */}


<ContactUs/>
</Container>
 </div>

    </div>
  )
}

export default Home
