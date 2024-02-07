import { addDoc, collection} from "firebase/firestore";
import { useState } from "react";
import {db} from './Config'
function StoreImageTextFirebase(){
    const [txt,setTxt] = useState('')
    const [img,setImg] = useState('')
    const[textlink,settextlink] = useState('')
    const [data,setData] = useState([])

    

    // const handleUpload = (e) =>{
    //     console.log(e.target.files[0])
    //     const imgs = ref(imgDB,`Imgs/${v4()}`)
    //     uploadBytes(imgs,e.target.files[0]).then(data=>{
    //         console.log(data,"imgs")
    //         getDownloadURL(data.ref).then(val=>{
    //             setImg(val)
    //         })
    //     })
    // }

    const handleClick =  () =>{
        try {
            const docRef =  addDoc(collection(db, "product"), {
              ProjectName: txt,
              projectLink: textlink
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    console.log('text: ',txt)
    console.log('link: ',textlink)

    return(
        <div>
             <input onChange={(e)=>setTxt(e.target.value)} /><br/>
             <input onChange={(e)=>settextlink(e.target.value)} /><br/>
             {/* <input type="file" onChange={(e)=>handleUpload(e)} /><br/><br/> */}
             <button onClick={handleClick}>Add</button>

             {
                data.map(value=><div>
                    {/* <h1>{value.txtVal}</h1> */}
                    {/* <img src={value.imgUrl} height='200px' width='200px' />  */}
                </div>)
             }
        </div>
    );
}
export default StoreImageTextFirebase;

