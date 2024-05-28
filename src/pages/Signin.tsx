import Input from "../components/Input"
import { useState } from "react"
import Button from "../components/Button"
import Heading from "../components/Heading";
import { SigninSchema } from "../utils/validation";
interface SigninError{
    username?: string ,
    password? :string
}
function Signin() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [ error , setError ] = useState<SigninError>({username : '',password : ''})
    const handleOnclick = ()=>{
        // Front end Validation Check
        const {success , error } = SigninSchema.safeParse({username : username , password : password})
        if(!success && error){
            const { fieldErrors } = error.flatten();
            setError({
                username: fieldErrors.username && fieldErrors.username[0],
                password: fieldErrors.password && fieldErrors.password[0],
              });
        }
        if(success){
            // Axios logic
        }
    }
    return (
        <>
        <div className="flex h-screen justify-center">
            <div className="flex flex-col justify-center">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 group-hover:duration-200 transition duration-1000 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                    <div className="relative flex w-full rounded-xl flex-col items-center bg-gray-500">
                    <Heading title={"Sign in"} />
                    <div>
                    <Input errorMessage={error['username']} required={true} placeHolder="Enter Username" type="text" onChange={(e)=> setUsername(e.target.value)} label="Username" />
                    </div>
                    <div>
                    <Input errorMessage={error['password']}  required={true} placeHolder="Enter Password" type="password" onChange={(e)=> setPassword(e.target.value)} label="Password" />
                    <p className="text-sm lg:text-md pb-4 text-blue-300 cursor-pointer mx-6 md:mx-20">Forgot Passoword?</p>
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
  