import DashboardCard from "./DashboardCard";
import "./Dashboard.css";

const Dashboard = () => {
  const cards = [
    { title: "Orders", subtitle: "5 active orders", path: "/orders" },
    { title: "Messages", subtitle: "4 unread messages", path: "" },
    { title: "Reviews", subtitle: "2 unread reviews", path: "" },
    { title: "Products", path: "" },
    { title: "Posts", path: "" },
    { title: "Stories", path: "" },
  ];

  return (
    <div className="container grid" id="container-id">
      {cards.map((card) => (
        <DashboardCard card={card} key={card.title}></DashboardCard>
      ))}
    </div>
  );
};

export default Dashboard;
