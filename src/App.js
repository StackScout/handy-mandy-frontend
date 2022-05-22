import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";
import OrderTable from "./components/order/OrderTable";
import { useActions } from "./hooks/useActions";

function App() {
  const { fetchOrders } = useActions();
  const { data: orders } = useSelector((state) => state.orders);

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<OrderTable orders={orders} />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
