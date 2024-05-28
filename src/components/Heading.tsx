import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"


function Heading({title} : {title : string}) {
    return (
     <div>
        <div className="font-heading text-3xl lg:text-4xl py-6 flex justify-center"><Link to={'/'} className="text-black pr-4 flex flex-col justify-center">
         <div><FaHome /> </div> </Link> {title} </div>
     </div>
    )
  }
  
  export default Heading