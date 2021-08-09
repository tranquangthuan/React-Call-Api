import React from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Home",
    to: "/",
    exact: true,
  },
  {
    name: "Product",
    to: "/product-list",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
class Menu extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand" href="/#">
          Call API
        </a>
        <ul className="nav navbar-nav">{this.showMenus(menus)}</ul>
      </div>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            activeOnlyWhenExact={menu.exact}
            to={menu.to}
          />
        );
      });
    }

    return result;
  };
}

export default Menu;