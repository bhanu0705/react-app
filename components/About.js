import { Outlet, useParams } from "react-router-dom";
const About=()=>{
    const pa=useParams();
    const {id}=pa;
    console.log(pa);
    return(
   <div>
        <h1>{id}</h1>
        <p>This is our official page</p>
        <Outlet />
    </div>
    )
    
}
export default About;