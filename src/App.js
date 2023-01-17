import './App.css';
import Login from './components/Login';
import Cont from './components/Cont';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function Insta() {
  let idText = '';
  console.log(idText)

  let [login, setLogin] = useState(false);
  
  return (

    <div className='instaWrap'>

      <Router>
        <Routes>
          <Route path='/' element={<Login idText={idText} />}></Route>
          <Route path='/Cont' element={<Cont />}></Route>
        </Routes>
      </Router>
      

      {/* <Login login={login} setLogin={setLogin}></Login> */}
      {/* {login == true ? <Content/> : null} */}
     
    </div>
   
  );
}

export default Insta;
