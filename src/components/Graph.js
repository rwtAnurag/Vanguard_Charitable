
import './Graph.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import legacyGraph from "../legacyGraph2.png";
import Activity from "../Activity.png";
const Graph = () =>{
          return(
              <>
                 <div className="container">
                        <div className="inside-upper-header  rounded-top">
                           <h5 className="title1">The Stanton Children's Education fund <KeyboardArrowDownIcon/> </h5>
                           <span className="title2" >The standard VCEP Speed Fund</span>
                        </div>
                        <div className="inside-header pl-2  pt-4">
                               <div>  
                                  <div className="d-flex">
                                       <div   className="content d-flex">
                                          <div  className="availableBalnce" style={{ width:"50%"}}><span className="">Available Balance </span><br/><span style={{color:"skyblue",fontSize: "1.5rem"}}>$ 500,000</span></div>
                                          <div  className="currentBalance" style={{ width:"50%"}} ><span className="">Current Balance</span><br/><span style={{color:"skyblue",fontSize: "1.5rem"}}>$ 536,000</span></div>
                                          
                                       </div>
                                       <div style={{ width:"40%"}} className="content1">
                                          <div ><span>Grant made </span><br/><span style={{color:"skyblue",fontSize: "1.5rem"}}>$ 500,000</span></div>   
                                       </div> 
                                  </div>
                                  <button  style={{backgroundColor:"skyBlue",border:"none",border:"none",paddingLeft:"15px",paddingRight:"15px",borderRadius:"10px"}} className="addButton">Add</button>
                                  <hr/>
                                 <div className="Legacy-journey p-2">
                                    {/* <div className="content d-flex">
                                       <div  style={{ width:"50%"}}><span>Available Balance </span><br/><span style={{color:"skyblue",fontSize: "1.5rem"}}>$ 500,000</span></div>
                                       <div  style={{ width:"50%"}} className="float-left"><span>Current Balance</span><br/><span style={{color:"skyblue",fontSize: "1.5rem"}}>$ 536,000</span></div>
                                    </div> */}
                                    <h4 style={{ fontSize:"1.5rem"}} className="LJ mt-2 pt-2">Legacy Journey</h4>
                                 
                                    <img alt ="ab" src={legacyGraph} className="graph1 "></img>
                                 </div>
                                 <div className="Activity1 p-1 mr-1">
                                 <div className="content">
                                       <div  style={{ width:"50%"}}><span>Grant made </span><br/><span style={{color:"skyblue",fontSize: "1.5rem"}}>$ 500,000</span></div>   
                                    </div>
                                    <h4 style={{ fontSize:"1.5rem"}} className=" mt-2 pt-2 pl-3">Activity</h4>
                                    <img className="" alt="ab" src={Activity} style={{ width:"100%",height:"100%"}}></img>
                                    <h6 className="mt-4">show more +</h6>
                                    {/* <div className="content">
                                       <div  style={{ width:"50%"}}><span>Grant made </span><br/><span style={{color:"skyblue",fontSize: "1.5rem"}}>$ 500,000</span></div>   
                                    </div>
                                    <h4 style={{ fontSize:"1.5rem"}} className=" mt-2 pt-2">Activity</h4>
                                    <div className="border-dark border-top border-bottom mt-5 mr-3">
                                          <h6 className="Activity-value-Wire">$ 50,000</h6>
                                          <div className="d-flex">
                                             <h6 className="value ">Wire Transfer</h6>
                                             <h6 className="date-wire ">1 jan 2017</h6>
                                          </div>
                                    </div>
                                    <div className="border-dark border-top border-bottom mr-3 ">
                                          <h6 className="Activity-value-Grant">$ 50,000</h6>
                                          <div className="d-flex">
                                             <h6 className="value ">Grant Made</h6>
                                             <h6 className="date-grant ">1 feb 2017</h6>
                                          </div>
                                    </div>
                                    <div className="border-dark border-top border-bottom mr-3 ">
                                          <h6 className="Activity-value">Recommended an exchange</h6>
                                          <div className="d-flex">
                                             <h6 className="value">Gift Preservation</h6>
                                             <h6 className="date">8 mar 2017</h6>
                                          </div>
                                    </div>
                                    <div className="border-dark border-top border-bottom mr-3 ">
                                          <h6 className="Activity-value">Recommended an exchange</h6>
                                          <div className="d-flex ">
                                             <h6 className="value">Conservative Growth</h6>
                                             <h6 className="date ">10 july 2017</h6>
                                          </div>
                                    </div>
                                    <div className="border-dark border-top border-bottom mr-3 ">
                                          <h6 className="Activity-value-Wire">$ 50,000</h6>
                                          <div className="d-flex">
                                             <h6 className="value ">Wire Transfer</h6>
                                             <h6 className="date-wire ">1 jan 2018</h6>
                                          </div>
                                    </div>
                                    <h6 className="mt-4">show more +</h6>*/}
                                 </div> 
                           </div>   
                     </div>
               </div>
              </>
          );
}

export default Graph;