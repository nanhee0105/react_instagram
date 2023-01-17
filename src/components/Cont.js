
import Header from "./Header";
import Feed from "./Feed";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'

function Cont(props) {
    return (
        <>
            <Header></Header>
            
            <Routes>
                <Route path="/feed" element={<Feed value={props.value} /> }></Route>
                <Route path="/Profile" element={<Profile />}></Route>
            </Routes>

        </>
    )
   
}

export default Cont;
