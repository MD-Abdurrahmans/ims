import { FaAd } from "react-icons/fa"


const SectionTitle = ({heading,subHeading}) => {

  return (
    <div className="max-w-md mx-auto text-center">
          <h1 className="font-semibold py-4 ">{subHeading}</h1>
           <p className="md:text-4xl ">{heading}   </p>
    </div>
  )
}

export default SectionTitle
