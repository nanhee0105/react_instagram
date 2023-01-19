
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'

function MainLayout(props) {
   
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    )
   
}

export default MainLayout;
