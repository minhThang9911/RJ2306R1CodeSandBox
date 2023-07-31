import { Link } from "react-router-dom";
import path from '../../config/path'

export default function Main(){
    return(
        <div>
            <ul>
            {
                Object.values(path).map((item,index) =>(
                    <li key={index}><Link to={item}>{item}</Link></li>
                ))
            }
                
            </ul>
        </div>
    )
}