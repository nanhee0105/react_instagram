import { React } from 'react';
import Post from './Post';
import data from '../data';


function Feed(props) {
    return (
        <div className="insta">
            {
                data.map(function (item, index) {
                    return (
                        <Post data={item} index={index} value={props.value}></Post>
                    )
                })
            }
        </div>
    )

   
   
}

export default Feed;
