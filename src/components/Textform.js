import React, {useState} from 'react'
//here useState is a hook

export default function Textform(props) {
    const [text,setText]=useState(""); //aray destructuring
    //here text is a variable jisme by default useState me jo value hai vo aa jaye and jab bhi ham text ki value ko change karenge to vo setText function se karenge not like text="hello" this is wrong
   /*  text="fgfg";--error*/
  /* setText("Enter something"); //this is way to update text state variable */

  let upperclick=()=>{
    console.log("Upper clicked");
    let newtext=text.toUpperCase();
    setText(newtext);
  }
 
  let lowercaseclick=()=>{
    let newtext=text.toLocaleLowerCase();
    setText(newtext);
  }

  let extraspaceclick=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
  }

  const handleonchange=(event)=>{
    console.log("On change");
    setText(event.target.value);  //by this we will be able to write something on textarea box
  }
  return (
    <>
    <div className="container"style={{color:props.mode==="dark"?"white":"black"}} >
    <h1>{props.heading}</h1>
    <div className="con">
    <textarea className="form-control" onChange={handleonchange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} value={text} placeholder="Enter text" id="mybox" rows="8"></textarea>
   {/*here we are putting two {{}} b/c one is for javascript and another is for object inside javascript we are writting one object*/}

  </div>
  <button className="btn btn-primary my-3" onClick={upperclick}>Covert to uppercase</button>
  <button className="btn btn-primary mx-3" onClick={lowercaseclick}>Convert to lowercase</button>
  <button className="btn btn-primary mx-3" onClick={extraspaceclick}>Remove extraspaces</button>
  </div>
  <div className="container"style={{color:props.mode==="dark"?"white":"black"}} >
    <h2>Your text here</h2>
    <p>{text.split(" ").length-1} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes read</p>
    <h2>Preview:</h2>
    <h3>{text}</h3>
  </div>
  </>
  )
}
