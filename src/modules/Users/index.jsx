import { useEffect, useState } from "react";
import { getData } from "../../api";
import path from '../../config/path'

function Users() {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        (async()=>{           
        // setUsers(await getUsers())
        setUsers(await getData(path.users))
        })()        
    },[])
    return ( <div>
    
        <h1>User list</h1>
        <ol>
            {
                users.map((item,index) =>(
                    <li key={index}>{item.name}</li>
                ))
            }
        </ol>
    </div> );
}

export default Users;