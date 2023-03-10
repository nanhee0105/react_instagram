import './App.css';
import Login from './layout/Login';
import MainLayout from './layout/MainLayout';
import Feed from './components/Feed';
import Profile from './components/Profile';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'

function App(props) {

  const [value, setValue] = useState("");
  return (
    
    <div className='instaWrap'>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Login value={value} setValue={setValue} />}></Route>
          <Route path="/" element={<Outlet />}>
            <Route element={<MainLayout value={value} /> }>
                <Route path='/Feed' element={<Feed value={value} />}></Route>
                <Route path='/Profile' element={<Profile value={value} />}></Route>
              </Route>
            </Route>
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
