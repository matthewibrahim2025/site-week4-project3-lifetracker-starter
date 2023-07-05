import './App.css'
import Navbar from "../Navbar/Navbar"
import Home from '../Home/Home'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import RegisterPage from '../RegisterPage/RegisterPage'
import SignInPage from '../SignInPage/SignInPage'
import ActivityPage from '../ActivityPage/ActivityPage'


function App() {

  return (
    <div>
      <BrowserRouter>
        
          <Navbar/>
          
          <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/register" element={ <RegisterPage/> }/> 

            <Route path="/login" element={ <SignInPage/> }/> 

            <Route path="/activity" element={<ActivityPage />} />

          </Routes>


        </BrowserRouter>      
    </div>
  )
}

export default App
