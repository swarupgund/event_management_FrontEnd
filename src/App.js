import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './App.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//new
import Navigation from "./component/navigation/Navigation";
import Event from "./component/Events/Event";
import Home from "./component/home/Home";
import AuthForm from "./component/auth/AuthForm";
import Birthday from "./component/eventdetails/Birthday";
import Corporate from "./component/eventdetails/Corporate";
import Exhibition from "./component/eventdetails/Exhibition";
import Wedding from "./component/eventdetails/Wedding";
import BookEventForm from "./component/bookevent/BookEventForm";
import DashBoardMain from "./component/dashboarddd/DashboardMain";
// import Header from "./component/demo/Header";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Events" element={<Event />} />
        <Route path="/Wedding" element={<Wedding />} />
        <Route path="/Birthday" element={<Birthday />} />
        <Route path="/Exhibition" element={<Exhibition />} />
        <Route path="/Corporate" element={<Corporate />} />
        <Route path="/AuthForm" element={<AuthForm />} />
        <Route path="/dashboard" element={<DashBoardMain />} />
        <Route path="/BookEventForm" element={<BookEventForm />} />
      </Routes>
    </Router>

    //2.
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Register />} />
    //     <Route path="/Login" element={<Login />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
