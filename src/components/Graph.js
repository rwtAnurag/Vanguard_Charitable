
import './Graph.css';
import graph1 from "../graph1.png";
const Graph = () =>{
          return(
              <>
                 <div className="container ">
                        <div className="inside-upper-header  rounded-top">
                           <h5 className="title1">The Stanton Children's Education fund</h5>
                          <span >The standard VCEP Speed Fund</span>
                        </div>
                        <div className="inside-header  pt-4">
                           <div>
                                 <div className="Legacy-journey  pl-3 mt-1">
                                    <div className="content d-flex">
                                       <div  style={{ width:"50%"}}><span>Available Balance </span><br/><span style={{color:"skyblue",fontSize: "1.5rem"}}>$ 500,000</span></div>
                                       <div  style={{ width:"50%"}} className="float-left"><span>Current Balance</span><br/><span style={{color:"skyblue",fontSize: "1.5rem"}}>$ 536,000</span></div>
                                    </div>
                                    <div>
                                    <h4 style={{ fontSize:"1.5rem"}}>Legacy Journey</h4>
                                    <h7>Balance over Time</h7>
                                    <h8 >Date range</h8>
                                    <h9>1D</h9>
                                    <h9>5D</h9>
                                    <h9>1M</h9>
                                    <h9>3M</h9>
                                    <h9>6M</h9>
                                    <h9>YTD</h9>
                                    <h9>1Y</h9>
                                    <h9>5Y</h9>
                                    <h9>MAX</h9>
                                    </div>
                                    <img alt ="ab" src={graph1} className="graph1"></img>
                                 </div>
                                 <div className="Activity1">
                                    <div className="content d-flex">
                                       <div  style={{ width:"50%"}}><span>Grant made </span><br/><span style={{color:"skyblue",fontSize: "1.5rem"}}>$ 500,000</span></div>   
                                    </div>
                                    <h4 style={{ fontSize:"1.5rem"}}>Activity</h4>
                                    <div className="border-dark border-top border-bottom mt-5  ">
                                          <h6 className="Activity-value-Wire">$ 50,000</h6>
                                          <div className="d-flex">
                                             <h6 className="value ">Wire Transfer</h6>
                                             <h6 className="date-wire ">1 jan 2017</h6>
                                          </div>
                                    </div>
                                    <div className="border-dark border-top border-bottom ">
                                          <h6 className="Activity-value-Grant">$ 50,000</h6>
                                          <div className="d-flex">
                                             <h6 className="value ">Grant Made</h6>
                                             <h6 className="date-grant ">1 feb 2017</h6>
                                          </div>
                                    </div>
                                    <div className="border-dark border-top border-bottom ">
                                          <h6 className="Activity-value">Recommended an exchange</h6>
                                          <div className="d-flex">
                                             <h6 className="value">Gift Preservation</h6>
                                             <h6 className="date">8 mar 2017</h6>
                                          </div>
                                    </div>
                                    <div className="border-dark border-top border-bottom ">
                                          <h6 className="Activity-value">Recommended an exchange</h6>
                                          <div className="d-flex ">
                                             <h6 className="value">Conservative Growth</h6>
                                             <h6 className="date ">10 july 2017</h6>
                                          </div>
                                    </div>
                                    <div className="border-dark border-top border-bottom ">
                                          <h6 className="Activity-value-Wire">$ 50,000</h6>
                                          <div className="d-flex">
                                             <h6 className="value ">Wire Transfer</h6>
                                             <h6 className="date-wire ">1 jan 2018</h6>
                                          </div>
                                    </div>
                                    <h6 className="mt-4">show more +</h6>
                                 </div>
                           </div>   
                     </div>
               </div>
              </>
          );
}

export default Graph;