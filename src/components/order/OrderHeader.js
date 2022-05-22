import "./OrderTable.css";

const OrderHeader = () => {
  return (
    <div className="grid-header-section">
      <Header value={"Venture"} />
      <Header value={"Order Status"} />
      <Header value={"Payment Date"} />
      <Header value={"Payment Status"} />
      <Header value={"Due Date"} />
      <Header value={"Customer"} />
      <Header value={"Platform"} />
      <Header value={"Product"} />
      <Header value={"Qty"} />
      <Header value={"Price"} />
      <Header value={"Delivery Type"} />
      <Header value={"Notes"} />
      <Header value={"Address"} />
      <Header value={"Mobile"} />
    </div>
  );
};

const Header = (props) => {
  const { value } = props;
  return (
    <div className="grid-header">
      <p>{value}</p>
    </div>
  );
};

export default OrderHeader;
