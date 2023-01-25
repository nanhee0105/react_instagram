import { useState } from 'react';
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import userData from "../data/userData";

function MainLayout() {
    let [myData, setmyData] = useState(userData[0].postData);
    let [fileImage, setFileImage] = useState("");
    let [uploadVal, setUploadVal] = useState("");
    // 파일 저장
    let saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
    };


    let addObj = {
        name: "추가",
        userImage: fileImage,
        postImage: fileImage,
        likes: 36,
        comments: uploadVal,
        date: "May 15",
        liked: false,
        content: "uploadVal",
    }

    console.log(myData)

    return (
        <>
            <Header myData={myData} setmyData={setmyData} fileImage={fileImage} saveFileImage={saveFileImage} uploadVal={uploadVal} setUploadVal={setUploadVal} addObj={addObj}></Header>
            <Outlet context={{myData}}></Outlet>
        </>
    )
   
}

export default MainLayout;
