import './App.css';
import Address from './component/profile/Address';
import Fullname from './component/profile/Fullname';
import Photoprofile from "./component/profile/Photoprofile.js";


function App() {
  return (
    <div className="App">
      <Photoprofile />
      <Fullname />
      <Address />
      
      
    </div>
  );
}

export default App;
