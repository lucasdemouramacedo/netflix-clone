import logo from './logo-net.png';
import './Header.css';
import profileImage from './netflix-avatar.png';
import MenuItems from "../MenuItems/MenuItems";
import MenuItem from "../MenuItem/MenuItem";
import { BiSearch } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Header() {
  return (
    <div className="header">
      <div className="container-left">
        <img src={logo} alt="Logo" className="logo" />
        <MenuItems />
      </div>
      <div className="container-right">
        <form>
        <label>
          <input type="text" name="name" className="search" autoComplete="off" placeholder="Pesquisar"/>
        </label>
        <BiSearch type="submit" className="icon" />
        </form>
        <MenuItem nome="Kids" />
        <div>
          <img src={profileImage} alt="Profile" className="profile-image" />
          <IoMdArrowDropdown className="icon arrow" />
        </div>
      </div>
    </div>
  );
}
