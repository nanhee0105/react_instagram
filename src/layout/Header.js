import logo from './../images/instagram_icon.png'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faRightToBracket, faList, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Upload from '../components/Upload';

function Header() {
    let [next, setNext] = useState(0);
    let [fileImage, setFileImage] = useState("");
    let [uploadVal, setUploadVal] = useState("");

    console.log(fileImage)
    console.log(uploadVal)
    // 파일 저장
    let saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
    };

    console.log(next)
    return (
        <>
            <hedaer className="header">
                <div className="headerWrap">
                    <div className="icons">
                        <Link to="/">
                            <img src={logo} alt="logo"></img>
                        </Link>
                        
                    </div>
                    <input type="text" placeholder="Search" className='serach'></input>
                    <div className="icons">

                  

                        <a className='inputfile' onChange={saveFileImage}>
                            <input type="file" id="file"  ></input>
                            <label for="file" accept="image/*"><FontAwesomeIcon icon={faPlus} /></label>
                        </a>

                       
                       
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


            {fileImage != '' ? <Upload fileImage={fileImage} saveFileImage={saveFileImage} next={next} setNext={setNext} uploadVal={uploadVal} setUploadVal={setUploadVal} /> : null}

            { next == 2 ? 'a' : 'b' }

           
        </>
    )
}

export default Header