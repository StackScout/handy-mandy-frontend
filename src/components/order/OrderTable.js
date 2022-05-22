import Order from "./Order";
import OrderHeader from "./OrderHeader";
import "./OrderTable.css";

const OrderTable = (props) => {
  const { orders } = props;

  return (
    <div class="grid-container">
      <OrderHeader />
      <div className="grid-data-section">
        {orders.map((order) => (
          <Order order={order} key={order.orderId} />
        ))}
      </div>
    </div>
  );
};

export default OrderTable;
