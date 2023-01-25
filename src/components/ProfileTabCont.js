import userData from "../data/userData";
import MyFeed from "./MyFeed";
import MyPostList from "./MyPostList";
import MyTagList from "./MyTagList";



function ProfileTabCont(props) {
    if (props.tab === 0) {
        return <div className="tabContWrap">
            <MyPostList value={props.value} data={props.data}></MyPostList>
        </div>
    }
    if (props.tab === 1) {
        return <MyFeed value={props.value}></MyFeed>
    }
    if (props.tab === 2) {
        return <div className="tabContWrap">
            {
                <MyTagList value={props.value}></MyTagList>
            }
        </div>
    }
}

export default ProfileTabCont;
