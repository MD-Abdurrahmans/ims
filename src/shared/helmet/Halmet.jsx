import { Helmet } from "react-helmet-async"


const Halmet = ({title}) => {

  return (
    <div>
       <Helmet>
        <title>IMS/{title}</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    </div>
  )
}

export default Halmet
