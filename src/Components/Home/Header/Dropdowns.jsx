import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dropdowns = ({ title, listOptions, active, number, setActive, rest }) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    if(!rest){
      setI(0)
    }
  })
  const list = listOptions.map((item) => {
    return (
      <li>
        <Link className="dropdown-item" to={item.link} key={item.id}>
          {item.title}
        </Link>
      </li>
    );
  });

  function handleActive() {
    if (i > 1) {
      setActive(0);
      setI(0);
    } else {
      setActive(number);
      setI(2);
    }
  }
  return (
    <li key={number}>
      <a
        onClick={() => handleActive()}
        style={{ cursor: "pointer" }}
        className="active-header"
      >
        <i class="fas fa-sort-down"></i>
        {title}
      </a>
      <ul
        className={`dropdown-menu ${ rest ? "" : "not-active"}`}
        aria-labelledby="dropdownMenuLink"
      >
        {list}
      </ul>
    </li>
  );
};

export default Dropdowns;
