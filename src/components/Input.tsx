
interface InputProps{
  type : string
  onChange : React.ChangeEventHandler<HTMLInputElement>
  label : string 
  placeHolder : string
}

function Input({type , onChange , placeHolder, label}: InputProps) {

  return (
    <div className="py-3">
      <div className="font-display text-md md:text-lg pb-1">{label}</div>
      <div>
      <input type={type} onChange={onChange} placeholder={placeHolder}  className=" w-64 h-10 lg:h-12 lg:text-md p-2 border placeholder-gray-500 border-gray-400 rounded-lg focus:border-gray-700 focus:outline-none" />
      </div>
        
    </div>
  )
}

export default Input