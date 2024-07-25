import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./RoutingFiles/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
// import Filter from "./Component/Home-T/Filter";
import Navbar from "./Component/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Filter from "./Pages/Home/FilterS/Filter";
import Departmentlist from './Pages/Home/DepartmentlistS/Departmentlist'
import Contact from "./Pages/Contact/Contact";
import Signup from "./Pages/SignUP/Signup";
import Loginsignup from "./RoutingFiles/Loginsignup";
import { useState } from "react";
import Alart from "./Component/Alart/Alart";
import Downloadpdf from "./Pages/Home/FilterS/Downloadpdf/Downloadpdf";




function App() {
const locomotiveScroll = new LocomotiveScroll();
const [alart, setAlart] = useState(null);

const showAlart = (type,message)=>{
  setAlart(
    { type : type,
     msg : message}
   )
   setTimeout(() => {
     setAlart(null);
 }, 1500);
};

const router = createBrowserRouter([
  {
    path: '/',
    element:( <><Navbar/><Alart alart={alart}/><Home/></>) ,
    children :[
      {
        path : '',
        element : <Departmentlist/>
      },
      {
        path : 'Filter',
        element : <Filter  showAlart = {showAlart}/>,
      }

    ]
  },
  {
    path: "/Contact-Us",
    element: ( <><  Navbar/><Alart alart={alart}/><Contact/></>  ),
  },
  {
      path : '/Downloadpdf',
     element : ( <><Alart alart={alart}/><Downloadpdf/></>  ),
  },
  {
    path: "/LogIn",
    element: ( <><Alart alart={alart}/><Loginsignup /></>  ),
    children : [
      {
        path: "",
        element: <Login showAlart = {showAlart}/>
      },
      {
        path: "Signup",
        element: <Signup showAlart = {showAlart}/>
      },
    ]
  },
  
  {
    path: "/Profile",
    element: ( <><Navbar/><Alart alart={alart}/><Profile showAlart = {showAlart} /></>  ),
  },
  {
    path: "/About-us",
    element: ( <><Navbar/><Alart alart={alart}/><AboutUs/></>  ),
  },
]);

  


  
  return (
    <>
    
      <RouterProvider router={router} />
    </>
  );
}

export default App;
