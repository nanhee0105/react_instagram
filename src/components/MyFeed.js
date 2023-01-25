import { useState } from 'react';
import Post from './Post';
import userData from "../data/userData";
import { useOutletContext } from "react-router-dom";


function MyFeed(props) {
    const { myData } = useOutletContext()

    return (
        <div className="insta">
            {
                myData.map(function (item, index) {
                    return (
                        <Post data={item} index={index} value={props.value} key={index}></Post>
                    )
                })
            }
        </div>
    )

   
   
}

export default MyFeed;
