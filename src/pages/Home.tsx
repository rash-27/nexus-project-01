import LinkButton from "../components/LinkButton"

function Home() {
    return (
     <>
     <div className="text-center flex h-screen justify-center"> 
     <div className="flex flex-col justify-center">
      <div className="font-heading text-white text-5xl py-8">Nexus Project - 01</div>
      <LinkButton name="Sign in" link="/signin" />
      <LinkButton name="Sign up" link="/signup" />
     </div>
     </div>
     </>
    )
  }
  
  export default Home
  