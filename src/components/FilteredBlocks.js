
import card1 from "../card-1.jpg";
import card2 from "../card-2.jpg";
import card3 from "../card-3.jpg";
import card4 from "../card-4.png";
import card5 from "../card-5.jpg";
import HE from "../highlight-education.png";
import HR from "../highlight-refugee.png";
import loginImage from "../login_image.png";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import PublicIcon from '@material-ui/icons/Public';

// import filtericon from "../filterIcon.png";
import './FilteredBlocks.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Slider } from "@material-ui/core";
const FilteredBlocks = () =>{
    const PrettoSlider = withStyles({
        root: {
          color: '#ffffff',
          height: 6,
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: '#32a0a8',
          border: '2px solid currentColor',
          marginTop: -8,
          marginLeft: -12,
          '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {
          left: 'calc(-50% + 4px)',
          color:"green",
        },
        track: {
          height: 6,
          borderRadius: 4,
        },
        rail: {
          height: 6,
          borderRadius: 4,
        },
      })(Slider);
    return(
        <>
          <div className="Blocks container d-flex p-0">
                <div className="block1 float-left ">
                    <div className="a1 mt-4  rounded-top">
                        <div className="a1_1 d-flex rounded-top pt-1">
                           <div className="valueSlider1">
                                <h10 className=" grant-cycle ml-2">Grant cycle</h10>
                                <h6 className=" Evry-year ml-2">Every Year</h6>
                            </div>
                           <div className="valueSlider2"  >
                          
                                 <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                               {/* <Slider aria-labelledby="continuous-slider" /> */}
                            </div>
                        </div>
                        <div className="card-1" style={{ backgroundImage: `url(${card1})`}}>
                              <div className="d-flex">
                                <div style={{ width:"60%"}}>
                                    <p className="pt-2" style={{ color: "#ebb134",position:"relative",left:"1rem"}}>Education</p>
                                    <p style={{ color: "#ebb134",position:"relative",left:"1rem",bottom:"1.8rem",color:"white"}}>$41700</p>
                                </div>
                                <div className="mt-2">
                                    <TwitterIcon style={{ color: "white",margin:"3px",height:"15px"}}/>
                                    <FacebookIcon style={{ color: "white",margin:"5px",height:"15px"}}/>
                                    <PublicIcon  style={{ color: "white",margin:"5px",height:"15px"}}/>
                                </div>
                              </div> 
                           <button className="ml-3 mt-3" style={{border:"none",backgroundColor:"#ebb134",borderRadius:"10px",paddingLeft:"20px",paddingRight:"20px",color:"white"}}>Gold</button>
                           <p className="p-1" style={{ color: "white",position:"relative",left:"1rem",fontSize:"1.1rem"}}>Association for childhood edu.</p>
                                <p className="p-1" style={{ color: "white",position:"relative",left:"1rem",bottom:"1.4rem",fontSize:"0.8rem"}}><span style={{fontSize:"10px",opacity:"0.6"}}>Rulling Year</span>: 1952 <span  style={{fontSize:"10px",opacity:"0.6",paddingLeft:"10px"}}>place</span>:Africa, India</p>
                        </div>
                        <h6 className="ml-3 mt-2">10:47 am-4 jan 2018</h6>
                        <div style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>  BBC NEws - Sesame Street to help Syrian refugees.#innovative #education</div>
                        <h6 className="ml-3 mt-2">10:47 am-4 jan 2018</h6>
                        <div className="mb-5 mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>"Mrs. Wong taught me how to speak English, how to thing, how to question.This teacher was caring,a nd went above and beyond to make me feel confident." http://ow.ly/9PIR30hyMOj "</div>
                    </div>
                    <div className="a2 mt-4 rounded-top">
                        <div className="card-1 rounded-top" style={{ backgroundImage: `url(${loginImage})`,backgroundSize: "cover"}}>
                             <div className="d-flex">
                                <div style={{ width:"60%"}}>
                                <p className="pt-2" style={{ color: "orange",position:"relative",left:"1rem"}}><img style={{ height:"30px",width:"30px"}} src={HR}></img>Refugee</p>
                                </div>
                                <div className="mt-2">
                                    <TwitterIcon style={{ color: "white",margin:"5px",height:"15px"}}/>
                                    <FacebookIcon style={{ color: "white",margin:"5px",height:"15px"}}/>
                                    <PublicIcon  style={{ color: "white",margin:"5px",height:"15px"}}/>
                                </div>
                              </div> 
                        
                            <button className="ml-3 mt-3" style={{border:"none",backgroundColor:"#ebb134",borderRadius:"10px",paddingLeft:"20px",paddingRight:"20px",color:"white"}}>Gold</button>
                            <p className="p-1" style={{ color: "white",position:"relative",left:"1rem",fontSize:"1.1rem"}}>REfuge center Online</p>
                                <p className="p-1" style={{ color: "white",position:"relative",left:"1rem",bottom:"1.4rem",fontSize:"0.8rem"}}><span style={{fontSize:"10px",opacity:"0.6"}}>Rulling Year</span>: 1996 <span  style={{fontSize:"10px",opacity:"0.6",paddingLeft:"10px"}}>place</span>:US </p>
                        </div>
                        <button className="summary">Summary</button>
                            <button className="operation">Operations</button>
                        <h6 className="ml-3 mt-2 mb-0">Mission</h6>
                        <div className="mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>THe Refugee Center Online (RCO) helps fegugees and migrants build new
                        lives using technology. RCCCC's interactive, multi-language website provides educational opportunities and general information about American society, and
                         connects refugees with services, programs, programs, and organization in their new communities</div>
                        <h6 className="ml-3 mt-2">Cause Area</h6>
                        <div className="mb-5 mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>Ethnic/Immigrant Services p84<br/>Public, Society Benefit - Multipurpose and Other N.E.C W99</div>
                        <h6 className="ml-3 mt-2">Main Address</h6>
                        <div className="mb-5" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>1320 SE 122nd Ave<br/>Porland, OR 97233 USA</div>
                        <button className="recomend-grant">  Filter by category</button>
                        <button className="visit-website">Find a charity</button>
                    </div>
                </div>
                <div className="block2 ">
                    <div className="b1 mt-4 rounded-top">
                        <div className="a1_2 d-flex rounded-top">
                        <div className="valueSlider1">
                                <h10 className=" grant-cycle ml-2">Grant cycle</h10>
                                <h6 className=" Evry-year ml-2">Every Year</h6>
                            </div>
                           <div className="valueSlider2"  >
                          
                                 <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                               {/* <Slider aria-labelledby="continuous-slider" /> */}
                            </div>
                         </div>
                        <div className="card-1" style={{ backgroundImage: `url(${card3})`,backgroundSize: "cover",width:"100%"}}>
                              <div className="d-flex">
                                <div style={{ width:"60%"}}>
                                    <p className="pt-2" style={{ color:"orange",position:"relative",left:"1rem"}}>Refugee</p>
                                    <p style={{ color: "#ebb134",position:"relative",left:"1rem",bottom:"1.8rem",color:"white"}}>$41700</p>
                                </div>
                                <div className="mt-2">
                                    <TwitterIcon style={{ color: "white",margin:"5px",height:"15px"}}/>
                                    <FacebookIcon style={{ color: "white",margin:"5px",height:"15px"}}/>
                                    <PublicIcon  style={{ color: "white",margin:"5px",height:"15px"}}/>
                                </div>
                              </div> 
                                
                                <button className="ml-3 mt-3" style={{border:"none",backgroundColor:"gray",borderRadius:"10px",paddingLeft:"20px",paddingRight:"20px",color:"white"}}>Silver</button>
                                <p className="p-1" style={{ color: "white",position:"relative",left:"1rem",fontSize:"1.1rem"}}>Association for childhood edu.</p>
                                <p className="p-1" style={{ color: "white",position:"relative",left:"1rem",bottom:"1.4rem",fontSize:"0.8rem"}}><span style={{fontSize:"10px",opacity:"0.6"}}>Rulling Year</span>: 1979 <span  style={{fontSize:"10px",opacity:"0.6",paddingLeft:"10px"}}>place</span>:US </p>
                            </div>
                            <h6 className="ml-3 mt-3 mb-0">02:47 pm - 1jan 2018</h6>
                            <div className="mr-3 mt-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>BBC News - Sesame Street to help Syrian refugees #innovatve #education</div>
                            <h6 className="ml-3 mt-3">011:43 am- 1jan 2018</h6>
                            <div className="mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>"Mrs. Wong taught me how to speak English, how to thing, how to question.This teacher was caring,a nd went above and beyond to make me feel confident." http://ow.ly/9PIR30hyMOj "</div>
                            <h6 className="ml-3 mt-3">08:43 am- 1jan 2018</h6>
                            <div className="mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>"Mrs. Wong taught me how to speak English, how to thing, how to question.This teacher was caring,a nd went above and beyond to make me feel confident." http://ow.ly/9PIR30hyMOj "</div>
                            <h6 className="ml-3 mt-3 mb-0">06:47 pm - 1jan 2018</h6>
                            <div className="mr-2 mt-3 mb-5" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>BBC News - Sesame Street to help Syrian refugees #innovatve #education</div>
                            <p className="mt-5" style={{position:"relative",left:"1rem",color:"skyblue"}}>more+</p>
                    </div>
                    <div className="b2 mt-4 rounded-top">
                        <div className="card-1 rounded-top" style={{ backgroundImage: `url(${card4})`,backgroundSize: "cover"}}>
                            <div className="d-flex">
                                <div style={{ width:"60%"}}>
                                <p className="pt-2" style={{ color: "#ebb134",position:"relative",left:"1rem"}}><img style={{ height:"30px",width:"30px"}} src={HE}></img> Education</p>
                                </div>
                                <div className="mt-2">
                                    <TwitterIcon style={{ color: "white",margin:"5px",height:"15px"}}/>
                                    <FacebookIcon style={{ color: "white",margin:"5px",height:"15px"}}/>
                                    <PublicIcon  style={{ color: "white",margin:"5px",height:"15px"}}/>
                                </div>
                              </div> 
                        
                                <button className="ml-3 mt-3" style={{border:"none",backgroundColor:"#ebb134",borderRadius:"10px",paddingLeft:"20px",paddingRight:"20px",color:"white"}}>Gold</button>
                                <p className="p-1" style={{ color: "white",position:"relative",left:"1rem",fontSize:"1.1rem"}}>Uma Education ,Inc.</p>
                                <p className="p-1" style={{ color: "white",position:"relative",left:"1rem",bottom:"1.4rem",fontSize:"0.8rem"}}><span style={{fontSize:"10px",opacity:"0.6"}}>Rulling Year</span>: 1994 <span  style={{fontSize:"10px",opacity:"0.6",paddingLeft:"10px"}}>place</span>:US </p>
                            </div>
                            <button className="summary">Summary</button>
                            <button className="operation">Operations</button>
                            <h6 className="ml-3 mt-2 mb-0">Mission</h6>
                            <div className="mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>Ultimate Medical Academy is a dynamic educational instituion committed
                            to equipping and empowering students to exel in healthcare careers. while (strive to provide a learning experience that maximizes value for aur students in a professional, supportive and ethical environment.</div>
                              <p className="mb-5 mt-5" style={{position:"relative",left:"1rem",color:"skyblue"}}>more+</p>
                            {/* <div className="mb-5" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>1320 SE 122nd Ave<br/>Porland, OR 97233 USA</div> */}
                            <button className="recomend-grant">  Filter by category</button>
                            <button className="visit-website">Find a charity</button>
                    </div>
                </div>
                <div className="block3  float-right">
                    <div className="c1 mt-4 ">
                          <div className="a1_1 d-flex rounded-top">
                            <div className="valueSlider1">
                                <h10 className=" grant-cycle ml-2">Grant cycle</h10>
                                <h6 className=" Evry-year ml-2">Every Year</h6>
                            </div>
                           <div className="valueSlider2"  >
                          
                                 <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                               {/* <Slider aria-labelledby="continuous-slider" /> */}
                            </div>
                          </div>
                          <div className="card-1" style={{ backgroundImage: `url(${card2})`,backgroundSize: "cover"}}>
                              <div className="d-flex">
                                <div style={{ width:"60%"}}>
                                   <p className="pt-2" style={{ color: "#ebb134",position:"relative",left:"1rem"}}>Education</p>
                                   <p style={{ color: "#ebb134",position:"relative",left:"1rem",bottom:"1.8rem",color:"white"}}>$41700</p>
                                </div>
                                <div className="mt-2">
                                    <TwitterIcon style={{ color: "white",margin:"5px",height:"15px"}}/>
                                    <FacebookIcon style={{ color: "white",margin:"5px",height:"15px"}}/>
                                    <PublicIcon  style={{ color: "white",margin:"5px",height:"15px"}}/>
                                </div>
                              </div> 
                          
                                <button className="ml-3 mt-3" style={{border:"none",backgroundColor:"#ebb134",borderRadius:"10px",paddingLeft:"20px",paddingRight:"20px",color:"white"}}>Gold</button>
                                <p className="p-1" style={{ color: "white",position:"relative",left:"1rem",fontSize:"1.1rem"}}>National Art Education Association</p>
                                <p className="p-1" style={{ color: "white",position:"relative",left:"1rem",bottom:"1.4rem",fontSize:"0.8rem"}}><span style={{fontSize:"10px",opacity:"0.6"}}>Rulling Year</span>: 2010 <span  style={{fontSize:"10px",opacity:"0.6",paddingLeft:"10px"}}>place</span>:US , Canada ,Africa</p>
                            </div>
                            <h6 className="ml-3 mt-3 mb-0">02:47 pm - 1jan 2018</h6>
                            <div className="mr-2 mt-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>BBC News - Sesame Street to help Syrian refugees #innovatve #education</div>
                            <h6 className="ml-3 mt-3">011:43 am- 1jan 2018</h6>
                            <div className="mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>"Mrs. Wong taught me how to speak English, how to thing, how to question.This teacher was caring,a nd went above and beyond to make me feel confident." http://ow.ly/9PIR30hyMOj "</div>
                            <h6 className="ml-3 mt-3">08:43 am- 1jan 2018</h6>
                            <div className="mb-5 mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>"Mrs. Wong taught me how to speak English, how to thing, how to question.This teacher was caring,a nd went above and beyond to make me feel confident." http://ow.ly/9PIR30hyMOj "</div>
                            <p className=" mt-5" style={{position:"relative",left:"1rem",color:"skyblue"}}>more+</p>
                    </div>
                    <div className="c2 mt-4 rounded-top">
                    <div className="card-1 rounded-top" style={{ backgroundImage: `url(${card5})`,backgroundSize: "cover"}}>
                              <div className="d-flex">
                                <div style={{ width:"60%"}}>
                                    <p className="pt-2" style={{ color: "#ebb134",position:"relative",left:"1rem"}}><img style={{ height:"30px",width:"30px"}} src={HE}></img> Education</p>
                                </div>
                                <div className="mt-2">
                                    <TwitterIcon style={{ color: "white",margin:"5px",height:"15px"}}/>
                                    <FacebookIcon style={{ color: "white",margin:"5px",height:"15px"}}/>
                                    <PublicIcon  style={{ color: "white",margin:"5px",height:"15px"}}/>
                                </div>
                              </div> 
                   
                                <button className="ml-3 mt-3" style={{border:"none",backgroundColor:"#ebb134",borderRadius:"10px",paddingLeft:"20px",paddingRight:"20px",color:"white"}}>Gold</button>
                                <p className="p-1" style={{ color: "white",position:"relative",left:"1rem",fontSize:"1.1rem"}}>National Humane Education Soc.</p>
                                <p className="p-1" style={{ color: "white",position:"relative",left:"1rem",bottom:"1.4rem",fontSize:"0.8rem"}}><span style={{fontSize:"10px",opacity:"0.6"}}>Rulling Year</span>: 1996 <span  style={{fontSize:"10px",opacity:"0.6",paddingLeft:"10px"}}>place</span>:US </p>
                            </div>
                            <button className="summary">Summary</button>
                            <button className="operation">Operations</button>
                            <h6 className="ml-3 mt-2 mb-0">Mission</h6>
                            <div className="mr-3 mb-5" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>The mission of The National Humane Education Society is "to foster a sentiment of kindness to animals is children and adults "</div>
                            <p className="mb-5" style={{position:"relative",left:"1rem",color:"skyblue"}}>more+</p>
                            <button className="recomend-grant">  Filter by category</button>
                            <button className="visit-website">Find a charity</button>
                    </div>
                </div>
            </div>
        
        </>
    );
}
export default FilteredBlocks;