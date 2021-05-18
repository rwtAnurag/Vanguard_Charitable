import 'bootstrap/dist/css/bootstrap.css'
import './Header.css';
// import { white } from '@material-ui/core/colors';
import background from "../malaysia-floods-l.jpg";
import Graph from "./Graph.js";
import logo from "../vanguard-logo.png";
import MenuIcon from '@material-ui/icons/Menu';
// import { useEffect, useState} from 'react';
// import { Opacity } from '@material-ui/icons';

const Header = ({active,setActive}) =>{
    // const [display,setDisplay]= useState("");
    // const [display2,setDisplay2]= useState("block");
    // useEffect(() => {
    //    if(display)
    //   });
    // const handleClick = ()=>{
    //     if(active){
    //         setActive(false);
    //     }
    //     else{
    //         setActive(true);
    //     }
       
    // }
    // useEffect(() => {
    //     if(display==='none'){

    //         setDisplay("block");
    //         setDisplay2("none");}
    //      else{
    //         setDisplay("none");
    //         setDisplay2("block");}
    //   },[active]);
    return (
        <>
         <div className="Header" style={{ backgroundImage: `url(${background})`}} >
             <nav>
                <img alt ="ab" className="logoImage" src={logo}></img> 
                <MenuIcon className="menuIcon" fontSize="large"/>
               <span className="title3"><span style={{opacity:"0.6"}}>Welcome</span> Elizabeth Standon</span>
               <ul >
                <label class="show">
                    <li><a href="a">Account</a></li>
                    <li><a href="a">Grant</a></li>
                    <li><a href="a">Contribution</a></li>
                    <li><a href="a">Report</a></li>
                    <li><a href="a">Log out</a></li>
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
            
             <div  className="Graph">
                 <Graph/> 
             </div>        
                
         </div>    
         </>
    );

}

export default Header;