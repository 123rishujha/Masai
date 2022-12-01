import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Login from "./Login";
import PrivateRoutes from "../Component/PrivateRoutes";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/dashboard/settings"
        element={
          <PrivateRoutes>
            <Settings />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}
export default AllRoutes;
