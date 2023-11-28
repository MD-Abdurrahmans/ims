import { FaPhone } from "react-icons/fa6"
import SectionTitle from "../../../shared/sectionTitle/SectionTitle"


const CalltoAction = () => {
  return (
 <div>


 <div className="my-8">
 <SectionTitle heading={'CALL FOR HELP'} ></SectionTitle>
 </div>

<section className="py-6 bg-black text-white">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
		<h1 className="text-3xl font-semibold   text-center flex lg:text-left"> <FaPhone className="text-4xl text-white mr-5"/>Call Us: 010000xxxxxxx  </h1>
		<button className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Contact</button>
	</div>
</section>

 </div>
  )
}

export default CalltoAction
