import { useState, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faPaperPlane, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

let likeArr = [];

function Post(props){
    let data = props.data;
    let index = props.index;
    let value = props.value;

    console.log(value)


    let [heart, setHeart] = useState(true);
    let [likeHeart, setLikeHeart] = useState(<FontAwesomeIcon icon={faHeart} />); 
    let [likeNum, setLikeNum] = useState(data.likes);

    let [inputVal, setInputVal] = useState('');
    let [addComment, setAddComment] = useState(['입력한 댓글 내용..'])

   

    return (
        <div className='post'>
            <div className='postHeader'>
                <div className='userImg'>
                    <img src={data.userImage}></img>
                </div>

                <div className='userName'>
                    <span>{data.name}</span>
                </div>
            </div>

            <div className='posterBody'>
                <div className='posterImg'>
                    <img src={data.postImage}></img>
                </div>

                <div className='innerWrap'>
                    <div className='icons'>
                        <p>
                            <span className='likeClick' onClick={() => {
                                if (heart == true) {
                                    setHeart(false);

                                    setLikeHeart(<FontAwesomeIcon icon={faHeartBroken} />)
                                    let copy = [data.likes+1]
                                    setLikeNum(copy)
                                } else {
                                    setHeart(true);
                                    setLikeHeart(<FontAwesomeIcon icon={faHeart} />);
                                    let copy2 = [data.likes]
                                    setLikeNum(copy2)
                                }
                            }}>{likeHeart}</span>
                            <span><FontAwesomeIcon icon={faComment} /></span>
                            <span><FontAwesomeIcon icon={faPaperPlane} /></span>
                        </p>
                        <p>좋아요 {likeNum}개</p>
                    </div>

                    <div className='comment'>
                        <p>
                            <span className='name'>{data.name}</span>
                            <span className='content'>{data.content}</span>
                        </p>
                        
                        {
                            addComment.map((item, index) => {
                                return <p className='userAdd'>
                                            <span className='name'>
                                                {value == "" ? 'name' :  value }
                                            </span>
                                            <span className='content'>{addComment[index]}</span>
                                           <span className='remove' onClick={() => { 
                                            let copy = [...addComment];
                                            copy.splice(index, 1);
                                            setAddComment(copy)
                                    }}><FontAwesomeIcon icon={faTrashCan} /></span>
                                        </p>
                            })
                        }
                       
                    </div>

                    <div className='date'>
                        <span>{data.date}</span>
                    </div>

                    
                    <div className='addComment'>
                        <textarea value={inputVal} onChange={(e) => {setInputVal(e.target.value)}}
                        placeholder="Add a comment..."></textarea>
                        <button  type="button" onClick={() => { let copy = [...addComment]
                            copy.push(inputVal); setAddComment(copy);
                            setInputVal('')
                        }}>게시</button>
                    </div>

                 
                </div> {/* innerWrap */}
            </div>
        </div>
    )

}
export default Post



