
import './App.css';
import {Routes , Route} from "react-router-dom"
import Workshop from './page/Workshop/Workshop';
import Home from './page/Home/Home';


function App() {
  return (
   <Routes>
      <Route path="/" element = {<Home/>}/>
     <Route path="/workshop" element = {<Workshop/>}/>
   </Routes>
   
  );
}

export default App;
