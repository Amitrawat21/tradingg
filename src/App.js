
import './App.css';
import {Routes , Route} from "react-router-dom"
import Workshop from './page/Workshop/Workshop';
import Home from './page/Home/Home';
import Login from './page/Login/Login';

import Aboutus from './page/Aboutus/Aboutus';
import Mentorship from './page/Mentorship/Mentorship';


function App() {
  return (
   <Routes>
      <Route path="/" element = {<Home/>}/>
     <Route path="/workshop" element = {<Workshop/>}/>
     <Route path="/" element = {<Home/>}/>
     <Route path="/login" element = {<Login/>}/>
     <Route path="/aboutus" element = {<Aboutus/>}/>
     <Route path="/mentorship" element = {<Mentorship/>}/>

   </Routes>
   
  );
}

export default App;
