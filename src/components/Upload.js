import { useState } from 'react';


function Upload(props) {
    let fileImage = props.fileImage;
    let saveFileImage = props.saveFileImage;
    let setNext = props.setNext;
    let next = props.next;
    let uploadVal = props.uploadVal;  
    let setUploadVal = props.setUploadVal;  

    return (
        <div className='fileUpload'>
            <div className='container'>
                {
                    next == 0 ? <div className='imgWrap'>
                        <button type="button" onClick={() => { setNext(1) }} className='nextBtn'>Next</button>
                        {fileImage && (<img alt="sample" src={fileImage} />)}
                    </div> : <div className='textWrap'>
                        <button type="button" onClick={() => { setNext(2) }} className='nextBtn'>발행하기</button>
                            <textarea placeholder='발행할 text를 입력해주세요.' value={uploadVal} onChange={(e) => {setUploadVal(e.target.value)}}></textarea>
                    </div> 
                }
               
            </div>
        </div>
    )

   
   
}

export default Upload;
