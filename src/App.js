
import './App.css';
import {Routes , Route} from "react-router-dom"
import Workshop from './page/Workshop/Workshop';
import Home from './page/Home/Home';
import Login from './page/Login/Login';


function App() {
  return (
   <Routes>
      <Route path="/" element = {<Home/>}/>
     <Route path="/workshop" element = {<Workshop/>}/>
     <Route path="/" element = {<Home/>}/>
     <Route path="/login" element = {<Login/>}/>
   </Routes>
   
  );
}

export default App;
