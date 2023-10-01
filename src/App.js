import React, { useState } from 'react'
import Navber from './components/Navber';
import UtileForm from './components/UtileForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";



const App = () => {
  const [mode, setMode] = useState('light');
  const [btn, setBtn] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null);

  const handleBlue = () => {
    setMode('primary');
    document.body.style.backgroundColor = '#0d6efd';
    setBtn("Enable Light Mode");
    showAlert("Blue Mode Is Enable", "success");
  }

  const handleRed = () => {
    setMode('danger');
    document.body.style.backgroundColor = '#dc3545';
    setBtn("Enable Light Mode");
    showAlert("Red Mode Is Enable", "success");
  }
   

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
       setAlert(null); 
    }, 1000);
  }


  const tooglemode = (cls) => {
    console.log(cls);
    // removeclass();
    if(mode === 'light')
    { 
      // document.body.classList.add('bg-secondary')
      setMode('#111439');
      setBtn('Enable Light Mode');
      document.body.style.backgroundColor = '#111439';
      showAlert("Dark Mode Is Enable", "success");

    }else{
      setMode('light');
      setBtn('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Is Enable", "success");
    }
  }

  

  return (
    <>
    <Router>
      <Navber  text="TextUtile" about="About" mode={mode} tooglemode = {tooglemode} btn={btn} handleBlue={handleBlue} handleRed={handleRed}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route path="/about" element={<About mode={mode}/>}></Route>
          <Route path="/" element={<UtileForm heading = "Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} showAlert={showAlert}/>}> </Route>
      </Routes>
      </div>
    </Router>  
    </>  
    
    
    )

  } 

export default App 