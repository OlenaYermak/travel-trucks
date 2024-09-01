import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container.jsx";

import style from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={style.header}>
      <Container>
        {" "}
        <div className={style.container}>
          <Link to="/">
            <Logo />
          </Link>
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
