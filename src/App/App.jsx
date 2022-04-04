import React from "react";

// css
import "./Styles/app.css";

//components
import Header from "./components/Header";
import SideBar from "./components/sidebar/SideBar";
import Chats from "./components/chats/chats";

// packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <SideBar />
          <Routes>
            <Route path="/chats/:channelsID" element={<Chats />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
