
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from "lottie-react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import iv from '../../../assets/inventory.json'
import b1 from '../../../assets/b1.json';
import b2 from '../../../assets/b2.json';
import s1 from '../../../../public/p1.svg';
import s2 from '../../../../public/s2.svg';
import s3 from '../../../../public/s3.png';
import { GrOptimize } from "react-icons/gr";

import Container from '../../../shared/Container';
AOS.init();
const Banner = () => {

  return (
    <div>


<Carousel autoPlay={true} infiniteLoop={true} className=''  >

{/* legend 1 */}

<div className="hero min-h-screen" style={{backgroundImage: `url(${s1})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="flex flex-col-reverse md:flex-row justify-between items-center">


                        <div data-aos="fade-right"    data-aos-duration="1000" className=' text-white max-w-md mx-auto'>
                       <h1 className='text-4xl '>EffortlessStock: Streamlining Your Inventory with Precision</h1>

                            </div>

                            <div data-aos="fade-left"    data-aos-duration="1000">
                            <Lottie className='h-[400px]' animationData={b1} ></Lottie>
                            </div>




    </div>
  </div>
</div>







{/* legend 2 */}

<div className="hero min-h-screen" style={{backgroundImage: `url(${s2})`,backgroundSize:'contain'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="flex flex-col-reverse md:flex-row justify-between items-center">


                        <div data-aos="fade-right"    data-aos-duration="1000" className=' text-white max-w-md mx-auto'>
                       <h1 className='text-4xl '>StockFlow: Seamless Inventory Management</h1>
                       <p className='pera my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi debitis aspernatur saepe molestias illum placeat dignissimos inventore vel sit optio?</p>

                            </div>

                            <div data-aos="fade-left"    data-aos-duration="1000">
                            <Lottie className='h-[400px]' animationData={b2} ></Lottie>
                            </div>




    </div>
  </div>
</div>









{/* legend 3 */}

<div className="hero min-h-screen" style={{backgroundImage: `url(${s3})`,backgroundSize:'contain'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="flex flex-col-reverse md:flex-row justify-between items-center">


                        <div data-aos="fade-right"    data-aos-duration="1000" className=' text-white max-w-md mx-auto'>
                       <h1 className='text-4xl '>InventoPro: Your Ultimate Inventory Companion</h1>
                       <p className='pera my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi debitis aspernatur saepe molestias illum placeat dignissimos inventore vel sit optio?</p>

                            </div>

                            <div data-aos="fade-left"    data-aos-duration="1000">
                              <GrOptimize className='text-[200px] text-[#FACC15] ' />
                            </div>




    </div>
  </div>
</div>



         
            </Carousel>

    </div>
  )
}

export default Banner
