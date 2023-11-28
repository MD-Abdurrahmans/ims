
import Lottie from "lottie-react";
import navLogo from '../../assets/inventory.json';
const Footers = () => {
  return (
    <div className=" bg-gradient-to-r from-[#1F2937] to-[#52525B] text-white">
<footer className="footer p-10">
  <aside>
    <Lottie   animationData={navLogo} className='h-32'></Lottie>
    <p>IMS Industries Ltd.<br/>Providing Shop. create Shop Growing Business<br/>
    <p>Copyright © 2023 - All right reserved by IMS Industries Ltd</p>
     </p>
  </aside> 
  <nav>
    <header className="footer-title">Useful Link</header> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Report</a>
    <a className="link link-hover">Products</a>
    <a className="link link-hover">Inventory</a>
    <a className="link link-hover">Contact Us</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">amazon</a>
    <a className="link link-hover">ali baba</a>
    <a className="link link-hover">evanto</a>
    <a className="link link-hover">Ims</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

    </div>
  )
}

export default Footers
