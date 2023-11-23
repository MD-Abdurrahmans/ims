import Container from "../../shared/Container"
import CalltoAction from "./components/CalltoAction"
import Faq from "./components/Faq"
import Team from "./components/Team"
import Testimonial from "./components/Testimonial"
import Banner from "./components/banner"


const Home = () => {
  return (
    <div>
  
  {/* banner */}
  <Banner/>


<Container>

  {/* call to action */}

<CalltoAction/>

{/* testimonial */}


<Testimonial/>

{/* team */}

<Team/>

{/* FAQ? */}
<Faq/>
</Container>

    </div>
  )
}

export default Home
