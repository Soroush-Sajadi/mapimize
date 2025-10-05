import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EuropeMap from "./Maps/EropueMap";
import AsiaMap from "./Maps/AsiaMap";
import AfricaMap from "./Maps/AfricaMap";
import NorthAmericaMap from "./Maps/NorthAmerica";
import SouthAmericaMap from "./Maps/SouthAmerica";
import AustraliaMap from "./Maps/AustraliaMap";
import { EuropeView } from "./Views/EuropeView";
import { AfricaView } from "./Views/AfricaView";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/europe" />} />
          <Route path="/europe" element={<EuropeView />} />
          <Route path="/asia" element={<AsiaMap />} />
          <Route path="/africa" element={<AfricaView />} />
          <Route path="/north-america" element={<NorthAmericaMap />} />
          <Route path="/south-america" element={<SouthAmericaMap />} />
          <Route path="/australia" element={<AustraliaMap />} />
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
