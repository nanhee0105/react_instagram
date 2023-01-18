import './App.css';
import Login from './layout/Login';
import MainLayout from './layout/MainLayout';
import Feed from './components/Feed';
import Profile from './components/Profile';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {

  const [value, setValue] = useState("");

  return (
    <div className='instaWrap'>

      <Router>
        <Routes>
          <Route path="/" element={<Login value={value} setValue={setValue} />}></Route>
          <Route path="/" element={<Outlet />}>
              <Route element={<MainLayout />}>
                <Route path='/Feed' element={<Feed value={value} />}></Route>
                <Route path='/Profile' element={<Profile value={value} />}></Route>
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
