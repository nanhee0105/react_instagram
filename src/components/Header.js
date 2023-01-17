import logo from './../images/instagram_icon.png'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'

function Header() {

    return (
        <>
            <hedaer className="header">
                <div className="headerWrap">
                    <div className="icons">
                        <Link to="/Profile">
                            <img src={ logo } alt="logo"></img>
                        </Link>
                        
                    </div>
                    <input type="text" placeholder="Search"></input>
                    <div className="icons">
                        <Link to="/">
                            <img src={logo} alt="logo"></img>
                        </Link>
                        <Link to="/">
                            <img src={logo} alt="logo"></img>
                        </Link>
                        <Link to="/">
                            <img src={logo} alt="logo"></img>
                        </Link>
                    </div>
                </div>
            </hedaer>
        </>
    )
}

export default Header