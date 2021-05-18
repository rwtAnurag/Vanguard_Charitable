import 'bootstrap/dist/css/bootstrap.css'
import './InvestMentOptions.css';
import grapha from "../graph-a.png";
import graphb from "../graph-b.png";
import graphc from "../graph-c.png";
const InvestMentOptions = ()=>{
    return(
        <>
         <div>
          <div className="InvestMentOptions  container">
              <div className="d-flex"><h2 className="ml-5">Investment Options</h2>
               <h4 className="mt-3 ml-2">(Invested in 6 Options)</h4>
              </div>
              <div className="graphs">
                  <div className="img1">
                      <img alt="ab" src={graphc}></img><br/>
                      <h7 >Short Term Bond <br/> <h7 className="rate">$13.56+1.50(+12.44%)</h7></h7>

                  </div>
                  <div className="d-grid img1">
                        <img alt="ab" src={graphb}></img><br/>
                        <h7 >Total Bond<br/> <h7 className="rate">$16.23-1.45(-820%)</h7></h7>
                  </div>
                  <div  className="img1">
                        <img alt="ab" src={grapha}></img><br/>
                        <h7>Moderate Growth <br/> <h7 className="rate">$39.21+2.78(+7.63%)</h7></h7>
                  </div>
                  <div className="img1">
                        <img alt="ab" src={graphc}></img><br/>
                        <h7>Total Equity <br/> <h7 className="rate">$23.54+0.28(+2.11%)</h7></h7>
                  </div>
                  <div className="img1">
                        <img alt="ab" src={grapha}></img><br/>
                        <h7>European Stock <br/> <h7 className="rate">$16.32-1.67(+9.28%)</h7></h7>
                        
                  </div>
                   <div className="img1" >
                        <img alt="ab" src={graphc}></img><br/>
                        <h7>Money Market <br/> <h7 className="rate">$11.20-0.38(-3.28%)</h7></h7>
                   </div>
                 </div>
                <center> <h6 className="mt-4">+ Recommend an exchange</h6></center>
            </div>
            <div className="filter-block d-flex container mt-4 p-auto">
                 <p className="grant-recommendation">Grant Recommendation</p>
                 <div className="filter-buttons">
                 <button className="filter-button ml-2"> Filter by category</button>
                 <button className="filter-button ml-2">Find a charity</button>
                 </div>
            </div>
            </div>  
        </>
    );
}
export default InvestMentOptions;