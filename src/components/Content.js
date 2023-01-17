import { React } from 'react';
import Post from './Post';
import data from '../data';


function Content() {
    return (
        <div className="insta">
            {
                data.map(function (item, index) {
                    return (
                        <Post data={item} index={index}></Post>
                    )
                })
            }
        </div>
    )

   
   
}

export default Content;
