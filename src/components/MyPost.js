import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

function MyPost(props) {
    let data = props.data;
    let [hover, setHover] = useState(false)

    return (
        <>
            <div className="userImg"
                onMouseOver={() => { setHover(true); }}
                onMouseLeave={() => { setHover(false); }}>
               <img src={data.postImage}></img>
               
                {
                    hover == true ? <HoverBox data={ data } /> : null
                }
              </div>
          
        </>
    )
}

export default MyPost;

function HoverBox(props) { 
    return (
        <div className="hoverBox">
            <div>
                <span>
                    <FontAwesomeIcon icon={faHeart} />
                    {props.data.likes}
                </span>
                <span>
                    <FontAwesomeIcon icon={faComment} />
                    {props.data.comments}
                </span>
            </div>
        </div>
   )
}