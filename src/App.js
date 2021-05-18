// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/Header.js"
import FilteredBlocks from "./components/FilteredBlocks.js"
import InvestMentOptions from "./components/InvestMentOptions.js"
import { useState } from 'react';


function App() {
  const [active,setActive] = useState(true);
  return (
    <div className="App">
      <Header active={active} setActive={setActive}/>
     
      { active===true ? <InvestMentOptions/> :null}
      { active===true ? <FilteredBlocks/> :null}     
    </div>
  );
}

export default App;
