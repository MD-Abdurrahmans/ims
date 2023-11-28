import Lottie from "lottie-react";
import error from "../../assets/error.json";
import { Link } from "react-router-dom";
import Halmet from "../../shared/helmet/Halmet";

const Forbidden = () => {

  return (
    <div className="flex justify-center flex-col  items-center min-h-screen">
          <Halmet title={'forbidden'} ></Halmet>

      <div className="text-center">
        <h1 className="text-5xl text-green-500 ">Forbidden Access</h1>
        <Lottie animationData={error} />

        <Link to="/">
          <button className="btn  bg-green-500 text-white">Go Home</button>
        </Link>
      </div>
    </div>
  );
};



export default Forbidden
