import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/general/Home'
import Login from './pages/general/Login';
import Register from './pages/general/Register';
import NavBar from './components/Header/NavBar';
import Profile from './pages/protectedpages/Profile';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
