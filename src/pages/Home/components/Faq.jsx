
const Faq = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg bg-[#374151] text-white">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Why is Inventory Management important for businesses??</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Efficient inventory management helps optimize stock levels, reduce costs, and improve overall operational efficiency.. </p>
			</details>
			<details className="w-full border rounded-lg bg-[#374151] text-white ">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">How does an IMS work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
			</details>


			<details className="w-full border rounded-lg bg-[#374151] text-white">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">Can an IMS handle multiple warehouse locations??</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Yes, many IMSs are designed to manage inventory across multiple warehouses or locations. </p>
			</details>
		</div>
	</div>
</section>
    </div>
  )
}

export default Faq
