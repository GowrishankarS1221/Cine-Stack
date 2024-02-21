import { useLocation } from "react-router";
import Header from "../header/Header";
import Posts from "../posts/Posts";
import Sidebar from "../sidebar/Sidebar";
import "./homepage.css";
import Topbar from "../topbar/Topbar";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
    <Topbar/>
      <Header />
      
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}