
import { MdErrorOutline } from "react-icons/md";
interface InputProps{
  type : string
  onChange : React.ChangeEventHandler<HTMLInputElement>
  label : string 
  placeHolder : string
  required? : boolean
  errorMessage? : string
}

function Input({type , onChange ,required=false , placeHolder, label , errorMessage=''}: InputProps) {

  return (
    <div className="pb-3">
      <div className="font-display text-md md:text-lg pb-1">{label}{required && <span className="text-red-700 pl-1">*</span>}</div>
      <div>
      <input type={type} onChange={onChange} placeholder={placeHolder}  className=" w-64 h-10 lg:h-12 lg:text-md p-2 border placeholder-gray-500 border-gray-400 rounded-lg focus:border-gray-700 focus:outline-none" />
      {errorMessage && <div className="text-red-700 pt-1 flex"> <div className="pt-1 pr-1"> <MdErrorOutline /> </div><div> {errorMessage} </div></div>}
      </div>
        
    </div>
  )
}

export default Input