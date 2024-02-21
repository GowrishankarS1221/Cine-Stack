import Topbar from "./topbar/Topbar";
import Homepage from "./homepage/Homepage";
import Login from "./login/Login";
import Register from "./register/Register";
import Settings from "./settings/Settings";
import Single from "./single/Single";
import Write from "./write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Routes>
        
        <Route exact path="/" element={<Homepage />}/>
        <Route path="/posts" element={ <Homepage />}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/write" element={<Write/>}/>
        <Route path="/homepage" element={<Homepage/>}/>
        
       

      </Routes>
    </Router>
  );
}

export default App;