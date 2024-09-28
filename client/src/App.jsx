import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./pages/Data";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import DataTable from "./components/DummyComponents/DataTable.jsx";
import NetworkLogs from "./components/DummyComponents/NetworkLogs.jsx";
import ViewDashboard from "./components/ViewDashboard";
import { data } from "./pages/jsonData.js";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/data" element={<Data />} />
        <Route path="/dashboard" element={<DataTable />} />
        <Route
          path="/view-audit/:role"
          element={<ViewDashboard items={data} />}
        />
        <Route path="/network-logs/:userId" element={<NetworkLogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
