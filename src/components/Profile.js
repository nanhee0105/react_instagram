import { useState } from "react";
import userData from "../data/userData";
import ProfileTabCont from "./ProfileTabCont";


function Profile(props) {
    let [tab, setTab] = useState(0)
    let [click, setClick] = useState(true)

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
                        </div>

                        <div>
                            <span>게시물 <strong>{userData[0].post}</strong></span>
                            <span>팔로워 <strong>{userData[0].Follow}</strong></span>
                            <span>팔로우 <strong>{userData[0].Following}</strong></span>
                        </div>

                        <div className="introduction">
                            <p>{userData[0].Introduction}</p>
                            <p>{userData[0].content}</p>
                        </div>

                        
                    </div>
                </div>

                <div className="profileBody">
                    <div className="tabBtn">
                        <span className={ tab === 0 ? "active" : '' } onClick={() => {
                            setTab(0); setClick(true);
                        }}>
                            게시물
                        </span>

                        <span className={ tab === 1 ? "active" : '' }onClick={() => { setTab(1); setClick(true)}}>
                            리스트
                        </span>

                        <span className={ tab === 2 ? "active" : '' }onClick={() => { setTab(2); setClick(true) }}>
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
