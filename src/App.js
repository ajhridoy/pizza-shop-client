import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Home></Home>
    </div>
  );
}

export default App;
