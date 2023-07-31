import { useEffect, useState } from "react";
import { getPosts } from "../../api";

function Posts() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        (async()=>{           
        setPosts(await getPosts())
        })()        
    },[])
    return ( <div>
        <h1>Post list</h1>
        <ol>
            {
                posts.map((item,index) =>(
                    <li key={index}>{item.title}</li>
                ))
            }
        </ol>
    </div> );
}

export default Posts;