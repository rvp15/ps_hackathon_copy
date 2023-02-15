import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/Header/NavBar";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import AdminPortal from "./pages/adminpages/AdminPortal";
import CreateEvents from "./pages/adminpages/CreateEvents";
import AllEvents from "./pages/adminpages/AllEvents";
import Registration from "./pages/userpages/Registration";
import EventDetails from "./pages/adminpages/EventDetails";

function App() {
  const { user } = useSelector((state) => state.auth);
  let routes;
  if (user) {
    if (user.admin) {
      //Include all Admin routes
      routes = (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<EventDetails />} />
          <Route path="*" element={<EventDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/adminportal" element={<AdminPortal />} />
          <Route path="/admin/createevents" element={<CreateEvents />} />
          <Route path="/admin/allevents" element={<AllEvents />} />
        </Routes>
      );
    } else {
      //Include users routes
      routes = (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Registration />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      );
    }
  } else {
    routes = (
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }
  return (
    <div className="container">
      <Router>
        <NavBar />
        {routes}
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
