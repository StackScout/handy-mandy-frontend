import "./OrderTable.css";

const OrderTable = () => {
  return (
    <div class="grid-container">
      <div className="grid-header-section">
        <div className="grid-header">Venture</div>
        <div className="grid-header">Customer</div>
        <div className="grid-header">Product</div>
        <div className="grid-header">Payment Status</div>
        <div className="grid-header">Due Date</div>
      </div>
      <div className="grid-data-section">
        <div className="grid-item">venture</div>
        <div className="grid-item">venture</div>
        <div className="grid-item">venture</div>
        <div className="grid-item">venture</div>
        <div className="grid-item">venture</div>
      </div>
    </div>
  );
};

export default OrderTable;
