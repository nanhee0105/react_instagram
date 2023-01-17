import { useState } from "react";
import { Link } from "react-router-dom";
function Login(props) {
    let [inputValue, setInputValue] = useState('');
    
    props.setValue(inputValue)

    function sendData() {
        props.setValue(inputValue);
    }

    return (
        <div className="login">
            <div className="loginBody">
                <form>
                    <input type="text" placeholder="Email" value={inputValue}
                        onChange={(e) => { setInputValue(e.target.value)}}/>
                    <Link to="/Feed">
                        <button type="button"
                            onClick={(e) => {
                                if (props.value == "") {
                                    alert("ID를 입력해주세요.")
                                    e.preventDefault()
                                }
                                sendData()
                            }
                        }>Login</button>
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
