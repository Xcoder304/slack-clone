import { useState, useEffect } from "react";

// css
import "./Styles/app.css";

//components
import Header from "./components/Header";
import SideBar from "./components/sidebar/SideBar";
import Chats from "./components/chats/chats";
import { ContextVal } from "./context/Context";
import Login from "./components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/db";

// packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const [{ user }, dispatch] = ContextVal();

  return (
    <Router>
      <div className="app">
        {user ? (
          <>
            <Header />
            <div className="app__body">
              <SideBar />
              <Routes>
                <Route path="/chats/:channelsID" element={<Chats />} />
              </Routes>
            </div>
          </>
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
};

export default App;
