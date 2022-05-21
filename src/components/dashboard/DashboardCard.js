import { Link } from "react-router-dom";
import "./Dashboard.css";

const DashboardCard = (props) => {
  const { title, subtitle, path } = props.card;
  return (
    <Link className="card" to={path}>
      <div className="card-title">
        <p>{title}</p>
      </div>
      {subtitle && (
        <div className="card-subtitle">
          <p>{subtitle}</p>
        </div>
      )}
    </Link>
  );
};

export default DashboardCard;
