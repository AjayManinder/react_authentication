import { menuItems } from '../menuItems';
import "./Nav.css";
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return (
           
            <div className="menu-items" key={index}>
              <a href={menu.url}>{menu.title}</a>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;