// import logo from './logo.svg';
import './App.css';
import FlexContainer from "./FlexContainer.js";
import ContohNavbar from './Components/Navbar.js';
import ContohCard from './Components/Cards.js';
import ContohFooter from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <ContohNavbar/>
      <ContohCard/>
      <FlexContainer/>
      <ContohFooter/>
      
    </div>
  );
}

export default App;
