import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div  className="w-screen min-h-screen bg-slate-50 flex flex-col font-poppins">
         
       <Routes>
          {/*Home Page Route */}
          <Route path="home" element={<Home/>}/>

          {/* Landing page Route */}
          <Route path="/" element={<LandingPage/>}></Route>
       </Routes>
    </div>
    
  );
}

export default App;
