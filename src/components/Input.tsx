
interface InputProps{
  type : string
  onChange : React.ChangeEventHandler<HTMLInputElement>
  label : string 
}

function Input({type , onChange , label}: InputProps) {

  return (
    <div className="py-3">
      <div className="font-display">{label}</div>
      <div>
      <input type={type} onChange={onChange}  className="w-64 h-12 text-lg p-2 border border-gray-400 rounded focus:border-gray-700 focus:outline-none" />
      </div>
        
    </div>
  )
}

export default Input