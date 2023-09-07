import { useState ,useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Utli from "./components/Utli";
import About from "./components/about"
import Alert from "./components/alert"
import Chatbot from "./components/Chatbot";

function App() {
  const [mstyle, setstyle] = useState({
    color: "black",
    background: "#acb2f6",
  });

  const [data, setData] = useState( {"intents" : []});
  useEffect(  () => {
     fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000/getdata/textappdata');
      const data1 = await response.json();
      setData(data1) ;
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  const toggle = () => {

    if (mstyle.color === "white")
    {
      setstyle({
        color: "black",
        background: "#acb2f6",
      });
      document.body.style.backgroundColor = "#bebfcd";
      showalert("LightMode" , "Success") ;

    } 

    else {
      setstyle({ color: "white", background: "#010b78" });
      document.body.style.backgroundColor = "#0e123a";
      showalert("DarkMode" , "Success") ;

    }
  };
  const toggle1 = () => {

    if (mstyle.color === "black")
    {
      setstyle({
        color: "white",
        background: "#8e0707",
      });
      document.body.style.backgroundColor = "#4c0404";
      showalert("DarkMode" , "Success") ;

    } 

    else {
      setstyle({ color: "black", background: "#f9b4b4" });
      document.body.style.backgroundColor = "#f53838";
      showalert("LightMode" , "Success") ;

    }
  };

  const[alert , setalert] = useState(null) ;

  const showalert = (message , type)=>{
    setalert({
      msg : message ,
      ty : type 
    }) ;

    setTimeout(  ()=>{
      setalert(null) ;
    } ,1000) ;
    
  }
  return (
    <>
    <Router>
      <Navbar title="Text Manager" s1={mstyle} f1={toggle} f2={toggle1} />
      <Alert a1={alert} />
      <div className="cbd1">
      <Chatbot data = {data}/></div>

      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <Utli fn1={showalert} s1={mstyle}/>
          </Route>
        </Switch>
        </Router>
    </>
  );
}

export default App;
