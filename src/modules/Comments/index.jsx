import { useEffect, useState } from "react";
import { getComments } from "../../api";

function Comments() {
    const [comments,setComments] = useState([])
    useEffect(()=>{
        (async()=>{           
        setComments(await getComments())
        })()        
    },[])
    return ( <div>
        <h1>Comments list</h1>
        <ol>
            {
                comments.map((item,index) =>(
                    <li key={index}>{item.body}</li>
                ))
            }
        </ol>
    </div> );
}

export default Comments;