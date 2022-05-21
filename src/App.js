import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import OrderTable from "./components/orders/OrderTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<OrderTable />} />
      </Routes>
    </Router>
  );
}

export default App;
