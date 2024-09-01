import { NavLink } from "react-router-dom";
import clsx from "clsx";

import style from "./Navigation.module.css";

const getNavLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

export default function Navigation() {
  return (
    <nav>
      <ul className={style.menuList}>
        <li>
          <NavLink className={getNavLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getNavLinkClass} to="/catalog">
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
