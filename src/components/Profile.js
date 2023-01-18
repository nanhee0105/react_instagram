import { useState } from "react";
import userData from "../userData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faBookmark, faHeart, faUser, fagear  } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpFromBracket, faEllipsis, faGear } from "@fortawesome/free-solid-svg-icons";
import ProfileTabCont from "./ProfileTabCont";


function Profile(props) {
    let [tab, setTab] = useState(0)

    return (
        <>
            <div className="Profile">
                <div className="profileHeader">
                    <div className="profileImg">
                        <img src={userData[0].userImage}></img>
                    </div>

                    <div className="profileCont">
                        <div>
                            <span className="userId">{
                                props.value == "" ? 'i.am.nanhee' : props.value
                            }</span>
                            <span className="edit">프로필 편집</span>
                            <span>
                                <FontAwesomeIcon icon={faGear} />
                            </span>
                        </div>

                        <div>
                            <span>게시물 {userData[0].post}</span>
                            <span>팔로워 {userData[0].Follow}</span>
                            <span>팔로우 {userData[0].Following}</span>
                        </div>

                        <div className="introduction">
                            <p>{userData[0].Introduction}</p>
                            <p>{userData[0].content}</p>
                        </div>

                        
                    </div>
                </div>

                <div className="profileBody">
                    <div className="tabBtn">
                        <span onClick={() => {
                            setTab(0);
                        }}>
                            게시물
                        </span>

                        <span onClick={() => { setTab(1)}}>
                            리스트
                        </span>

                        <span onClick={() => { setTab(2) }}>
                            태그
                        </span>
                    </div>

                    <ProfileTabCont value={props.value} tab={ tab }></ProfileTabCont>
                </div>
             </div>
        </>
    )
   
}

export default Profile;
