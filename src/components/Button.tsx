import { Link } from "react-router-dom"

interface ButtonProps {
    name : string
    link : string
    onClick : React.MouseEventHandler<HTMLButtonElement>
}
function Button({name , link , onClick} : ButtonProps) {
    return (
        <>
     <div>
        <button onClick={onClick} type="submit" className="font-display w-32 h-12 border-2 md:text-lg bg-blue-300 border-blue-300 rounded-lg mt-3 mb-6">{name}</button> 
     </div>
        <div className="pb-2 ">{link === 'signin' ? "Already have an account? " : "Don't have an account? "} <Link to={`/${link}`} className="text-blue-300">{link.charAt(0).toUpperCase() + link.slice(1)}</Link> </div> 
    </>  
    )
  }
  
  export default Button
  