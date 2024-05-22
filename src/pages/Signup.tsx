import { Link } from "react-router-dom"
import Input from "../components/Input"
import { useState } from "react"
function SignUp() {
    const [userName , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [email , setEmail] = useState('')
    return (
        <>
        <div>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="flex h-screen justify-center">
            <div className="flex flex-col justify-center w-1/4 ">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 group-hover:duration-200 transition duration-1000 bg-gradient-to-r from-pink-600 to-purple-600"></div>
                    <div className="relative flex bg-white w-full rounded-xl flex-col items-center bg-gray-200">
                    <h1 className="font-heading text-4xl py-6"> Sign up </h1>
                  
                    <div>
                    <Input type="email" onChange={(e)=> setEmail(e.target.value)} label="Email" />
                    </div>
                    <div>
                    <Input type="text" onChange={(e)=> setUsername(e.target.value)} label="Username" />
                    </div>
                    <div>
                    <Input type="password" onChange={(e)=> setPassword(e.target.value)} label="Password" />
                    </div>
                    <button type="submit" className="font-display w-32 h-12 border-2 bg-blue-200 border-blue-300 rounded-lg mt-3 mb-6">Sign Up</button>
                    <div className="pb-2 ">Already have an account? <Link to={'/signin'} className="text-blue-700">SignIn</Link> </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
  }
  
  export default SignUp
  