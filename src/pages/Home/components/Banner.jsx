
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Banner = () => {

  return (
    <div>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1649424221467-32578cf4695e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW52ZW50b3J5JTIwbWFuZ2VtZW50JTIwc3lzc3RlbXxlbnwwfHwwfHx8MA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div data-aos="fade-left"  data-aos-duration="1000" className="hero-content text-center text-neutral-content">
    <div  className="max-w-lg">
      <h1 className="mb-5  text-3xl  sm:text-5xl font-bold">Inventory Management System</h1>
      <p className="mb-5">Optimize, Track, and Manage Your Inventory with Ease Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, similique?</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner
