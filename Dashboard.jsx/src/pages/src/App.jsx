import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import LostItems from "./pages/LostItems";
import FoundItems from "./pages/FoundItems";
import ReportItem from "./pages/ReportItem";
import MyClaims from "./pages/MyClaims";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex bg-slate-950 min-h-screen text-white">
      <Sidebar />

      <div className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lost" element={<LostItems />} />
          <Route path="/found" element={<FoundItems />} />
          <Route path="/report" element={<ReportItem />} />
          <Route path="/claims" element={<MyClaims />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
