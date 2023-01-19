import { useState } from 'react';
import MyPost from './MyPost';
import userData from "../data/userData";

function MyTagList() {
    let [dataValue, setDataValue] = useState(userData[0].tagData);

    return (
        <>
            {
                dataValue.map((item, index) => {
                    return <MyPost data={item} key={index}></MyPost>
                 })
            }
        </>
    )

   
   
}

export default MyTagList;
