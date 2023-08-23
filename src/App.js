import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
//import About from "./components/About";
import React, {useState} from "react";

function App() {
  //we are making state variable in app.js b/c we want to manage the state of our whole application through app.js
  const [mode,setMode]=useState('dark');
  //this sate variable will tell whether dark mode is enabled or not


  const togglemode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#051b3d";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
      <Navbar title="React" aboutText="About us" mode={mode} togglemode={togglemode} /> 
      <div className="container my-3">
      <Textform heading="Enter text to analyze below:" mode={mode}/>
    {/* <About/> */}
      </div>
    </>
  );
}

export default App;

//here by <Navbar/> we are importing navbar
//here <Navbar/> is a component and tilte and aboutText are the props ham ek component bana ke differnet props dal sakte hai  
//like ham ek navbar bana le and usko ham different pages par diff content ke sath dalna chahte hai then we can make oe component navbar and we can assign it diff values using props

