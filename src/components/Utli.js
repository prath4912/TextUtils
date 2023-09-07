import React , {useState} from 'react' ;
import "./compo.css";

export default function Utli(props) {
  const[text , settext]=useState("") ;
  let m1 = "Enter Text To See Preview" ;
  let m2 = "Preview" ;

  function upp()
  {
    let cap = text.toUpperCase() ;
    settext(cap) ;
    props.fn1("Converted to Uppercase" , "Success") ;

  }
  function onc(event)
  {
    let new1 = event.target.value ;
    settext(new1) ;
  }
  function low()
  {
    let low = text.toLowerCase() ;
    settext(low) ;
    props.fn1("Converted to Lowercase" , "Success") ;
  }

  function cl(){
    settext("") ;
    props.fn1("Textarea Cleared" , "Success") ;

  }
  
  return (
    <div className="n1"     style={{color:props.s1.color}}    >
      {/* <h2>Enter Text Below</h2> */}
      <textarea style={{backgroundColor:props.s1.background , color:props.s1.color}} name=""   id="t1" onChange={onc} value={text} cols="130" rows="10" placeholder='Enter Text Here'></textarea>
      <div>
      <button disabled={text.length===0} className="btn btn-primary m-3" onClick={upp}>UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary m-3" onClick={low}>Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary m-3" onClick={cl}>clear</button>

      </div>
      <div>
        Character Count = {text.length}
        <br />
        Word count = {text.split(/\s+/).filter((element)=>{return element.length!=0}).length}
      </div>
      <div>
        {
          
        }
        <h4>{m2}</h4>
        <p>{text.length>0?text:m1}</p>

      </div>
    </div>
  )
}

