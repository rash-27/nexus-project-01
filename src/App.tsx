import Signin from "./pages/Signin"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Background from "./components/Background";
import Notfound from "./pages/Notfound";
function App() {
  return (
    <BrowserRouter>
    <Background />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
