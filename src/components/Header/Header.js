import logo from './logo-net.png';
import './Header.css';
import profileImage from './netflix-avatar.png';
import MenuItems from "../MenuItems/MenuItems";
import { BiSearch } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Header() {
  return (
    <div className="header">

      <div className="menu-mobile">
        <div className="menu-linha">
        </div>
        <div className="menu-linha">
        </div>
        <div className="menu-linha">
        </div>
      </div>

      <div className="left">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="menu">
          <MenuItems />
        </div>
      </div>

      <div className="right">
        <div className="search">
          <form>
            <input type="text" name="name" className="search-input" autoComplete="off" placeholder="Pesquisar" autoFocus/>
            <BiSearch type="submit" className="icon" />
          </form>
        </div>

        <div className="profile-menu">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <IoMdArrowDropdown className="icon-arrow" />
        </div>
      </div>

    </div>
  );
}
