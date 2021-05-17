import 'bootstrap/dist/css/bootstrap.css'
import './Header.css';
// import { white } from '@material-ui/core/colors';
import background from "../malaysia-floods-l.jpg";
import Graph from "./Graph.js";
import logo from "../vanguard-logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import { useState} from 'react';
// import { Opacity } from '@material-ui/icons';

const Header = () =>{
    const [display,setDisplay]= useState("");
    // useEffect(() => {
    //    if(display)
    //   });
    const handleClick = ()=>{
        if(display==='none')
           setDisplay("block");
        else
           setDisplay("none");
    }
    return (
        <>
         <div className="Header" style={{ backgroundImage: `url(${background})`}} >
             <nav>
                <img alt ="ab" className="logoImage" src={logo}></img> 
                
                     <MenuIcon className="menuIcon"  onClick={handleClick} fontSize="large"/>
             
             {/* <span className="title">Welcome Elizabeth Standon</span> */}
               <ul style={{display:display}}>
                <label class="show">
                 <li><a href="ab">Account</a></li>
                 <li><a href="ab">Grant</a></li>
                 <li><a href="ab">Contribution</a></li>
                 <li><a href="ab">Report</a></li>
                 <li><a href="ab">Log out</a></li>
                 </label> 
               </ul>
               </nav>
             {/* <div className="menu mt-3">
                <button className="menubutton ml-3 mt-5">Log out</button>
                <button className="menubutton ml-3 mt-5">Report</button>
                <button className="menubutton ml-3 mt-5">Contribution</button>
                <button className="menubutton ml-3 mt-5">Grant</button>
                <button className="menubutton ml-3 mt-5">Account</button>
             </div>  */}
            
             <div className="Graph">
                 <Graph/> 
             </div>        
                
         </div>    
         </>
    );

}

export default Header;