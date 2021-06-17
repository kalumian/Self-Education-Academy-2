import { Link } from "react-router-dom";

const Box = ({ count, title, link, icon }) => {
  return (
    <div className="box">
      <i className={icon}></i>
      <div className="number">{count}</div>
      <p>
        <Link to={link}>{title}</Link>
      </p>
    </div>
  );
};

export default Box;
