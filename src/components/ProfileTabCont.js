import userData from "../userData";
import MyFeed from "./MyFeed";

function ProfileTabCont(props) {
    if (props.tab === 0) {
        return <div className="tabContWrap">
            {
                userData[0].postData.map((item, index) => {
                    return <div className='userImg'>
                        <img src={item.postImage}></img>
                    </div>

                })
            }
        </div>
    }
    if (props.tab === 1) {
        return <MyFeed value={props.value}></MyFeed>
    }
    if (props.tab === 2) {
        return <div className="tabContWrap">
            {
                userData[0].tagData.map((item, index) => {
                    return <div className='userImg'>
                        <img src={item.postImage}></img>
                    </div>

                })
            }
        </div>
    }
}

export default ProfileTabCont;
