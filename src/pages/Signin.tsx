import Input from "../components/Input"
import { useState } from "react"
import Button from "../components/Button"
import Heading from "../components/Heading";
function Signin() {
    const [userName , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const handleOnclick = ()=>{
        // Axios logic
    }
    return (
        <>
        <div className="flex h-screen justify-center">
            <div className="flex flex-col justify-center w-72 lg:w-1/4">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 group-hover:duration-200 transition duration-1000 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                    <div className="relative flex w-full rounded-xl flex-col items-center bg-gray-500">
                    <Heading title={"Sign in"} />
                    <div>
                    <Input placeHolder="Enter Username" type="text" onChange={(e)=> setUsername(e.target.value)} label="Username" />
                    </div>
                    <div>
                    <Input placeHolder="Enter Password" type="password" onChange={(e)=> setPassword(e.target.value)} label="Password" />
                    <p className="text-sm lg:text-md pb-4 text-blue-300 cursor-pointer">Forgot Passoword?</p>
                    </div>
                    <Button onClick={handleOnclick} link="signup" name="Sign in" />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
  }
  
  export default Signin
  