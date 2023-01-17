import './App.css';
import Login from './components/Login';
import Cont from './components/Cont';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logo from './images/instagram_icon.png'

function Insta() {

  const [value, setValue] = useState("");
  console.log("입력한 id: ", value)

  return (
    <div className='instaWrap'>
      
      <Router>
        <Routes>
          <Route path='/' element={<Login value={value} setValue={setValue} />}></Route>
          <Route path='/Cont' element={<Cont value={value} />}></Route>
        </Routes>
      </Router>
      
      {/* <Login login={login} setLogin={setLogin}></Login> */}
      {/* {login == true ? <Content/> : null} */}
     
    </div>
   
  );
}

export default Insta;
