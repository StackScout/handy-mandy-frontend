import "./OrderTable.css";

const Order = (props) => {
  const { order } = props;

  return (
    <div className="grid-data-row">
      <Cell value={order.venture} />
      <Cell value={order.status} className={"status"} />
      <Cell value={order.paymentDate} />
      <Cell value={order.paymentStatus} className={"status"} />
      <Cell value={order.dueDate} />
      <Cell value={order.customer} />
      <Cell value={order.platform} />
      <Cell value={order.product} />
      <Cell value={order.qty} />
      <Cell value={order.price} />
      <Cell value={order.delivery} />
      <Cell value={order.notes} />
      <Cell value={order.address} />
      <Cell value={order.mobile} />
    </div>
  );
};

const Cell = (props) => {
  const { value, className } = props;

  return (
    <div className="grid-item">
      <p className={className}>{value}</p>
    </div>
  );
};

export default Order;
