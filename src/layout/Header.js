import logo from './../images/instagram_icon.png'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faRightToBracket, faList } from "@fortawesome/free-solid-svg-icons";

function Header() {

    return (
        <>
            <hedaer className="header">
                <div className="headerWrap">
                    <div className="icons">
                        <Link to="/">
                            <img src={logo} alt="logo"></img>
                        </Link>
                        
                    </div>
                    <input type="text" placeholder="Search"></input>
                    <div className="icons">
                        <Link to="/Feed">
                            <FontAwesomeIcon icon={faList} />
                        </Link>
                        <Link to="/Profile">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                        <Link to="/">
                            <FontAwesomeIcon icon={faRightToBracket} />
                        </Link>
                    </div>
                </div>
            </hedaer>
        </>
    )
}

export default Header