import Input from "../components/Input"
import { useState } from "react"
import Button from "../components/Button"
import Heading from "../components/Heading"
import { SignUpSchema } from "../utils/validation"
interface SignupError{
  username?: string ,
  password? :string ,
  email? : string
}
function SignUp() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [email , setEmail] = useState('')
    const [error , setError] = useState<SignupError>({username : '',password : '',email : ''})
    const handleOnclick= ()=>{
      const {success , error }= SignUpSchema.safeParse({username:username , password : password , email : email})
      if(!success && error){
        const { fieldErrors } = error.flatten();
            setError({
                username: fieldErrors.username && fieldErrors.username[0],
                password: fieldErrors.password && fieldErrors.password[0],
                email :  fieldErrors.email && fieldErrors.email[0],
              });
      }
      if(success){
        //Axios logic 
      }
    }
    return (
        <>
        <div className="flex h-screen justify-center">
            <div className="flex flex-col justify-center ">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 group-hover:duration-200 transition duration-1000 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                    <div className="relative flex w-full rounded-xl flex-col items-center bg-gray-500">
                    <Heading title={"Sign up"} />
                    <div>
                    <Input errorMessage={error['email']} required={true} placeHolder="Enter email" type="email" onChange={(e)=> setEmail(e.target.value)} label="Email" />
                    </div>
                    <div>
                    <Input errorMessage={error['username']} required={true} placeHolder="Create a Username" type="text" onChange={(e)=> setUsername(e.target.value)} label="Username" />
                    </div>
                    <div>
                    <Input errorMessage={error['password']} required={true} placeHolder="Create a password" type="password" onChange={(e)=> setPassword(e.target.value)} label="Password" />
                    </div>
                    <Button onClick={handleOnclick} link="signin" name="Sign Up" />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
  }
  
  export default SignUp
  