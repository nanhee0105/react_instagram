import './App.css';
import Login from './components/Login';
import MainLayout from './components/MainLayout';
import Feed from './components/Feed';
import Profile from './components/Profile';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {

  const [value, setValue] = useState("");
  console.log("입력한 id: ", value)

  return (
    <div className='instaWrap'>

      <Router>
        <Routes>
          <Route path="/login" element={<Login value={value} setValue={setValue} />}></Route>
          <Route path="/" element={<Outlet />}>
            <Route element={<MainLayout />}>
              <Route path='/Feed' element={<Feed value={value} />}></Route>
              <Route path='/Profile' element={<Profile />}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
     
      
      {/* <Login login={login} setLogin={setLogin}></Login> */}
      {/* {login == true ? <Content/> : null} */}
     
    </div>
   
  );
}

export default App;
