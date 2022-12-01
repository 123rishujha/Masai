import AllRoutes from "./Pages/AllRoutes";
import Navbar from "./Component/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}
