import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"


function Heading({title} : {title : string}) {
    return (
     <div>
        <div className="font-heading text-3xl lg:text-4xl py-6 flex"><Link to={'/'} className="absolute left-10 text-black "><FaHome /> </Link> {title} </div>
     </div>
    )
  }
  
  export default Heading