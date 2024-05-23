import { Link } from "react-router-dom"

interface LinkButtonProps{
    name : string
    link : string 
}
function LinkButton({name , link} : LinkButtonProps) {
    return (
    <div>
        <div className="relative">
            <div className="absolute -inset-0.5 bg-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 group-hover:duration-200 transition duration-1000 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <Link to={link} className=" relative p-4 justify-center text-xl flex bg-gray-900 border boder-white my-6 rounded-lg">
                <div className="text-white font-display">
                    {name}
                </div>
            </Link>
        </div>
    </div>
    )
  }
  
  export default LinkButton