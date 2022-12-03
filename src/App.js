import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Capsules from "./LandingPage/Capsule";


import React from "react";

function App() {
    return (
        <Router>
            <Routes>
              <Route exact path='/' element={<Capsules/>} />
             
            </Routes>
      </Router>
    );
}
 

export default App;