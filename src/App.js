// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/Header.js"
import FilteredBlocks from "./components/FilteredBlocks.js"
import InvestMentOptions from "./components/InvestMentOptions.js"


function App() {
  return (
    <div className="App">
      <Header/>
      <InvestMentOptions/>
      <FilteredBlocks/>
    </div>
  );
}

export default App;
