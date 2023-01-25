import { useState } from "react";
import { Link } from "react-router-dom";
function Login(props) {
    let [inputValue, setInputValue] = useState('');
    
    props.setValue(inputValue)

    function sendData() {
        props.setValue(inputValue);
    }

    const regexEng = /^[a-z|A-Z]+$/;
    const regexNum = /^[0-9]+$/;
    const regexEN = /^[A-Za-z0-9]+$/;

    console.log(props.value)
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
                                    e.preventDefault();
                                } else if (regexEng.test(props.value) || regexNum.test(props.value) || regexEN.test(props.value)) {
                                    sendData();
                                } else {
                                    alert("숫자나 영문만 입력하실 수 있습니다.");
                                    e.preventDefault();
                                    props.setValue("r");
                                }
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
