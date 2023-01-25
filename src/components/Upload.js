import { useState } from 'react';


function Upload(props) {
    let [next, setNext] = useState(0);
    let myData = props.myData;
    let setmyData = props.setmyData;
    let fileImage = props.fileImage;
    let saveFileImage = props.saveFileImage;

    let uploadVal = props.uploadVal;  
    let setUploadVal = props.setUploadVal;
    let addObj = props.addObj;  

    console.log(addObj)
    return (
        <div className='fileUpload'>
            <div className='container'>
                {
                    next == 0 ? <div className='imgWrap'>
                        <button type="button" onClick={() => { setNext(1) }} className='nextBtn'>Next</button>
                        {fileImage && (<img alt="sample" src={fileImage} />)}
                    </div> : <div className='textWrap'>
                            <button type="button" onClick={() => {
                                setNext(2);
                                setmyData( ...myData, addObj )
                                console.log( ...myData, addObj )
                            }} className='nextBtn'>발행하기</button>
                            <textarea placeholder='발행할 text를 입력해주세요.' value={uploadVal} onChange={(e) => {setUploadVal(e.target.value)}}></textarea>
                    </div> 
                }

            </div>
        </div>
    )

   
   
}

export default Upload;
