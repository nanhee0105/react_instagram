import { useState } from 'react';
import Post from './Post';
import userData from "../data/userData";


function MyFeed(props) {
    let [dataValue, setDataValue] = useState(userData[0].postData);

    return (
        <div className="insta">
            {
                dataValue.map(function (item, index) {
                    return (
                        <Post data={item} index={index} value={props.value} key={index}></Post>
                    )
                })
            }
        </div>
    )

   
   
}

export default MyFeed;