
import card1 from "../card-1.jpg";
import filtericon from "../filterIcon.png";
import './FilteredBlocks.css';
import 'bootstrap/dist/css/bootstrap.css';
const FilteredBlocks = () =>{
    return(
        <>
          <div className="Blocks container d-flex p-0">
                <div className="block1 float-left ">
                    <div className="a1 mt-4 p-0 rounded-top">
                        <div className="a1_1 rounded-top"></div>
                        <div className="card-1" style={{ backgroundImage: `url(${card1})`}}>
                            <p style={{ color: "yellow",position:"relative",left:"1rem"}}>Education</p>
                            <button className="ml-3 mt-3" style={{border:"none",backgroundColor:"yellow",borderRadius:"10px",paddingLeft:"20px",paddingRight:"20px"}}>Gold</button>
                            <p style={{ color: "white",position:"relative",left:"1rem",fontSize:"1.1rem"}}>Association for childhood edu.</p>
                            <p style={{ color: "white",position:"relative",left:"1rem",bottom:"1.4rem",fontSize:"0.8rem"}}>Rulling Year: 1952    place:Africa,India </p>
                        </div>
                        <h6 className="ml-3 mt-2">10:47 am-4 jan 2018</h6>
                        <div style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>  BBC NEws - Sesame Street to help Syrian refugees.#innovative #education</div>
                        <h6 className="ml-3 mt-2">10:47 am-4 jan 2018</h6>
                        <div className="mb-5 mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>"Mrs. Wong taught me how to speak English, how to thing, how to question.This teacher was caring,a nd went above and beyond to make me feel confident." http://ow.ly/9PIR30hyMOj "</div>
                    </div>
                    <div className="a2 mt-4 rounded-top">
                        <div className="card-1" style={{ backgroundImage: `url(${card1})`}}>
                            <p style={{ color: "yellow",position:"relative",left:"1rem"}}>Education</p>
                            <button className="ml-3 mt-3" style={{border:"none",backgroundColor:"yellow",borderRadius:"10px",paddingLeft:"20px",paddingRight:"20px"}}>Gold</button>
                            <p style={{ color: "white",position:"relative",left:"1rem",fontSize:"1.1rem"}}>REfuge center Online</p>
                            <p style={{ color: "white",position:"relative",left:"1rem",bottom:"1.4rem",fontSize:"0.8rem"}}>Rulling Year: 1952    place:Africa,India </p>
                        </div>
                        <h6 className="ml-3 mt-2 mb-0">Mission</h6>
                        <div className="mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>THe Refugee Center Online (RCO) helps fegugees and migrants build new
                        lives using technology. RCCCC's interactive, multi-language website provides educational opportunities and general information about American society, and
                         connects refugees with services, programs, programs, and organization in their new communities</div>
                        <h6 className="ml-3 mt-2">Cause Area</h6>
                        <div className="mb-5" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>Ethnic/Immigrant Services p84<br/>Public, Society Benefit - Multipurpose and Other N.E.C W99</div>
                        <h6 className="ml-3 mt-2">Main Address</h6>
                        <div className="mb-5" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>1320 SE 122nd Ave<br/>Porland, OR 97233 USA</div>
                        <button className="recomend-grant">  Filter by category</button>
                        <button className="visit-website">Find a charity</button>
                    </div>
                </div>
                <div className="block2 ">
                    <div className="b1 mt-4 rounded-top">
                        <div className="a1_2 rounded-top"> </div>
                        <div className="card-1" style={{ backgroundImage: `url(${card1})`}}>
                                <p style={{ color: "yellow",position:"relative",left:"1rem"}}>Education</p>
                                <button className="ml-3 mt-3" style={{border:"none",backgroundColor:"yellow",borderRadius:"10px",paddingLeft:"20px",paddingRight:"20px"}}>Gold</button>
                                <p style={{ color: "white",position:"relative",left:"1rem",fontSize:"1.1rem"}}>REfuge center Online</p>
                                <p style={{ color: "white",position:"relative",left:"1rem",bottom:"1.4rem",fontSize:"0.8rem"}}>Rulling Year: 1952    place:Africa,India </p>
                            </div>
                            <h6 className="ml-3 mt-3 mb-0">02:47 pm - 1jan 2018</h6>
                            <div className="mr-3 mt-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>BBC News - Sesame Street to help Syrian refugees #innovatve #education</div>
                            <h6 className="ml-3 mt-3">011:43 am- 1jan 2018</h6>
                            <div className="mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>"Mrs. Wong taught me how to speak English, how to thing, how to question.This teacher was caring,a nd went above and beyond to make me feel confident." http://ow.ly/9PIR30hyMOj "</div>
                            <h6 className="ml-3 mt-3">08:43 am- 1jan 2018</h6>
                            <div className="mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>"Mrs. Wong taught me how to speak English, how to thing, how to question.This teacher was caring,a nd went above and beyond to make me feel confident." http://ow.ly/9PIR30hyMOj "</div>
                            <h6 className="ml-3 mt-3 mb-0">06:47 pm - 1jan 2018</h6>
                            <div className="mr-2 mt-3 mb-5" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>BBC News - Sesame Street to help Syrian refugees #innovatve #education</div>
                    </div>
                    <div className="b2 mt-4 rounded-top">
                        <div className="card-1" style={{ backgroundImage: `url(${card1})`}}>
                                <p style={{ color: "yellow",position:"relative",left:"1rem"}}>Education</p>
                                <button className="ml-3 mt-3" style={{border:"none",backgroundColor:"yellow",borderRadius:"10px",paddingLeft:"20px",paddingRight:"20px"}}>Gold</button>
                                <p style={{ color: "white",position:"relative",left:"1rem",fontSize:"1.1rem"}}>REfuge center Online</p>
                                <p style={{ color: "white",position:"relative",left:"1rem",bottom:"1.4rem",fontSize:"0.8rem"}}>Rulling Year: 1952    place:Africa,India </p>
                            </div>
                            <h6 className="ml-3 mt-2 mb-0">Mission</h6>
                            <div className="mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>THe Refugee Center Online (RCO) helps fegugees and migrants build new
                            lives using technology. RCCCC's interactive, multi-language website provides educational opportunities and general information about American society, and
                            connects refugees with services, programs, programs, and organization in their new communities</div>
                            <h6 className="ml-3 mt-2">Cause Area</h6>
                            <div className="mb-5" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>Ethnic/Immigrant Services p84<br/>Public, Society Benefit - Multipurpose and Other N.E.C W99</div>
                            <h6 className="ml-3 mt-2">Main Address</h6>
                            <div className="mb-5" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>1320 SE 122nd Ave<br/>Porland, OR 97233 USA</div>
                            <button className="recomend-grant">  Filter by category</button>
                            <button className="visit-website">Find a charity</button>
                    </div>
                </div>
                <div className="block3  float-right">
                    <div className="c1 mt-4 ">
                          <div className="a1_1 rounded-top">

                          </div>
                          <div className="card-1" style={{ backgroundImage: `url(${card1})`}}>
                                <p style={{ color: "yellow",position:"relative",left:"1rem"}}>Education</p>
                                <button className="ml-3 mt-3" style={{border:"none",backgroundColor:"yellow",borderRadius:"10px",paddingLeft:"20px",paddingRight:"20px"}}>Gold</button>
                                <p style={{ color: "white",position:"relative",left:"1rem",fontSize:"1.1rem"}}>REfuge center Online</p>
                                <p style={{ color: "white",position:"relative",left:"1rem",bottom:"1.4rem",fontSize:"0.8rem"}}>Rulling Year: 1952    place:Africa,India </p>
                            </div>
                            <h6 className="ml-3 mt-3 mb-0">02:47 pm - 1jan 2018</h6>
                            <div className="mr-2 mt-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>BBC News - Sesame Street to help Syrian refugees #innovatve #education</div>
                            <h6 className="ml-3 mt-3">011:43 am- 1jan 2018</h6>
                            <div className="mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>"Mrs. Wong taught me how to speak English, how to thing, how to question.This teacher was caring,a nd went above and beyond to make me feel confident." http://ow.ly/9PIR30hyMOj "</div>
                            <h6 className="ml-3 mt-3">08:43 am- 1jan 2018</h6>
                            <div className="mb-5 mr-3" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>"Mrs. Wong taught me how to speak English, how to thing, how to question.This teacher was caring,a nd went above and beyond to make me feel confident." http://ow.ly/9PIR30hyMOj "</div>
                    </div>
                    <div className="c2 mt-4 rounded-top">
                    <div className="card-1" style={{ backgroundImage: `url(${card1})`}}>
                                <p style={{ color: "yellow",position:"relative",left:"1rem"}}>Education</p>
                                <button className="ml-3 mt-3" style={{border:"none",backgroundColor:"yellow",borderRadius:"10px",paddingLeft:"20px",paddingRight:"20px"}}>Gold</button>
                                <p style={{ color: "white",position:"relative",left:"1rem",fontSize:"1.1rem"}}>REfuge center Online</p>
                                <p style={{ color: "white",position:"relative",left:"1rem",bottom:"1.4rem",fontSize:"0.8rem"}}>Rulling Year: 1952    place:Africa,India </p>
                            </div>
                            <h6 className="ml-3 mt-2 mb-0">Mission</h6>
                            <div className="mr-3 mb-5" style={{position:"relative",left:"1rem",fontSize:"0.7rem"}}>The mission of The National Humane Education Society is "to foster a sentiment of kindness to animals is children and adults "</div>
                            <p className="mb-5" style={{position:"relative",left:"1rem"}}>more+</p>
                            <button className="recomend-grant">  Filter by category</button>
                            <button className="visit-website">Find a charity</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FilteredBlocks;