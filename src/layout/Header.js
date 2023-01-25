import logo from './../images/instagram_icon.png'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faRightToBracket, faList, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import Upload from '../components/Upload';


function Header(props) {
    let fileImage = props.fileImage;
    let saveFileImage = props.saveFileImage;

    let uploadVal = props.uploadVal;
    let setUploadVal = props.setUploadVal;  
    let addObj = props.addObj;  
    let myData = props.myData
    let setmyData = props.setmyData

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


            {fileImage != '' ? <Upload fileImage={fileImage} saveFileImage={saveFileImage} uploadVal={uploadVal} setUploadVal={setUploadVal}
                addObj={addObj}
                myData={myData} setmyData={setmyData}

            /> : null}


           
        </>
    )
}

export default Header