import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amis from "./pages/Amis";
import Home from "./pages/Home";
import Messagerie from "./pages/Messagerie";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/senior-chat/messagerie" element={<Messagerie />} />
          <Route path="/senior-chat/amis" element={<Amis />} />
          <Route path="/senior-chat/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
