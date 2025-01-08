
import './App.css';
import {Routes , Route} from "react-router-dom"
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Form from './page/Form/Form';
import Aboutus from './page/Aboutus/Aboutus';
import Mentorship from './page/Mentorship/Mentorship';
import Workshop from './page/Workshop/Workshop';


function App() {
  return (
   <Routes>
      <Route path="/" element = {<Home/>}/>
     <Route path="/Form" element = {<Form/>}/>
     <Route path="/" element = {<Home/>}/>
     <Route path="/workshop" element = {<Workshop/>}/>
     <Route path="/login" element = {<Login/>}/>
     <Route path="/aboutus" element = {<Aboutus/>}/>
     <Route path="/mentorship" element = {<Mentorship/>}/>

   </Routes>
   
  );
}

export default App;
