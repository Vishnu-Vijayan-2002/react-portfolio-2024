import './App.css'
import Home from "./Routes/Home"
import About from "./Routes/About"
import Project from './Routes/Project';
import Contact from './Routes/Contact';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default App
