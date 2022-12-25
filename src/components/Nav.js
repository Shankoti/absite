import { Component } from "react";
import logo from "../logo.svg";
import { Navbaritems } from "../NavbarItems";
import "./NavbarStyles.css";
class Nav extends Component {
  render() {
    return (
      <nav className="navItems">
        <h1>
          <img
            className="App-logo"
            width="100"
            height="100"
            src={logo}
            alt="logo"
          />
        </h1>
        <ul className="nav-menu">
          {Navbaritems.map((item, index) => {
            return (
              <li key={index}>
                <a className="nav-link" href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Nav;
