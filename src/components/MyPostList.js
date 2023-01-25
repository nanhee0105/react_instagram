import { useState } from 'react';
import MyPost from './MyPost';
import userData from "../data/userData";
import { useOutletContext } from "react-router-dom";

function MyPostList(props) {
    const { myData } = useOutletContext()
    
    return (
        <>
            {
                myData.map((item, index) => {
                    return <MyPost data={item} key={index}></MyPost>
                 })
            }
        </>
    )

   
   
}

export default MyPostList;
