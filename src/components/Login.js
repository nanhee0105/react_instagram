import { useState } from "react";
import { Link } from "react-router-dom";
function Login(props) {
    let [inputValue, setInputValue] = useState(props.idText);
    let idText = inputValue;
    console.log(idText)

    return (
        <div className="login">
            <div className="loginBody">
                <form>
                    <input type="text" placeholder="Email" value={inputValue}
                        onChange={(e) => { setInputValue(e.target.value)}}/>
                    <Link to="/Cont">
                        <button type="button"
                            onClick={(e) => { 
                                if (idText == "") {
                                    alert("ID를 입력해주세요.")
                                    e.preventDefault()
                                } 
                         }}
                        >Login</button>
                    </Link>
                    
                </form>
            </div>
            <div className="loginFooter">
                    <span>Don't have an account?</span>
                    <span>Sign up</span>
            </div>
      </div>
    )



}

export default Login;
