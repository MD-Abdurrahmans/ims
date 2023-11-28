import Container from "../../shared/Container"
import Halmet from "../../shared/helmet/Halmet"
import CalltoAction from "./components/CalltoAction"
import Faq from "./components/Faq"
import Plane from "./components/Plane"
import Team from "./components/Team"
import Testimonial from "./components/Testimonial"
import Banner from "./components/banner"


const Home = () => {
  return (
    <div  >
          <Halmet title={'Home'} ></Halmet>
  
  {/* banner */}
  <Banner/>


 <div className="my-10">
 <Container>

{/* call to action */}

<CalltoAction/>


{/* PLAN */}

<Plane/>

{/* testimonial */}
<Testimonial/>

{/* team */}

<Team/>

{/* FAQ? */}
<Faq/>
</Container>
 </div>

    </div>
  )
}

export default Home
