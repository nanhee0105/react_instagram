import data from "../data";
function ProfileTabCont(props) {
    if (props.tab === 0) {
        return <div className="tabContWrap">
            {
                data.map((item, index) => {
                    return <div className='userImg'>1
                        <img src={item.postImage}></img>
                    </div>

                })
            }
        </div>
    }
    if (props.tab === 1) {
        return <div className="tabContWrap">
            {
                data.map((item, index) => {
                    return <div className='userImg'>2
                        <img src={item.postImage}></img>
                    </div>

                })
            }
        </div>
    }
    if (props.tab === 2) {
        return <div className="tabContWrap">
            {
                data.map((item, index) => {
                    return <div className='userImg'>3
                        <img src={item.postImage}></img>
                    </div>

                })
            }
        </div>
    }
}

export default ProfileTabCont;
