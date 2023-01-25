import { useState } from 'react';
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import userData from "../data/userData";

function MainLayout(props) {
    let [myData, setmyData] = useState(userData[0].postData);
    let [fileImage, setFileImage] = useState("");
    let [uploadVal, setUploadVal] = useState("");
    // 파일 저장
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
    };
   

    console.log(props.value)
    let addObj = {
        name: props.value == '' ? 'i.am.nanhee' : props.value,
        userImage: 'https://placeimg.com/200/200/any',
        postImage: fileImage,
        likes: 36,
        comments: 31,
        date: "May 15",
        liked: false,
        content: uploadVal,
    }

    console.log(myData)

    return (
        <>
            {console.log('test')}
            <Header myData={myData} setmyData={setmyData} fileImage={fileImage} saveFileImage={saveFileImage} uploadVal={uploadVal} setUploadVal={setUploadVal} addObj={addObj} setFileImage={setFileImage}></Header>
            <Outlet context={{myData}}></Outlet>
        </>
    )
   
}

export default MainLayout;
