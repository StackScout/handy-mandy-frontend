import { Link } from "react-router-dom";
import "./Dashboard.css";

const DashboardCard = (props) => {
  const { title, subtitle, path } = props.card;
  return (
    <Link className="card" to={path}>
      <p className="card-title">{title}</p>
      {subtitle && (
        <div className="card-subtitle">
          <p>{subtitle}</p>
        </div>
      )}
    </Link>
  );
};

export default DashboardCard;
