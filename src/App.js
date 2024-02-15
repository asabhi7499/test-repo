import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home"

function App() {
  return (
    <div  className="w-screen min-h-screen bg-slate-50 flex flex-col font-poppins">   
       <Routes>
          <Route path="home" element={<Home/>}/>
       </Routes>
    </div>
    
  );
}

export default App;
