import { useState } from 'react';
import Post from './Post';
import data from '../data/data';
import data2 from '../data/data2';


function Feed(props) {
    let [dataValue, setDataValue] = useState(data);
    return (
        <div className="insta">
            {
                dataValue.map(function (item, index) {
                    return (
                        <Post data={item} index={index} value={props.value} key={index}></Post>
                    )
                })
            }

            <div className='more' onClick={() => { 
                console.log(...data2)
                setDataValue([...dataValue, ...data2])
            }}>
                <button type='button'>더보기</button>
            </div>

        </div>
    )

   
   
}

export default Feed;
