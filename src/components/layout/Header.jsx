import { NavLink } from 'react-router-dom';
import { FaDev } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="h-15 bg-[#00ADB5] text-[#222831] font-mono  pt-2 pb-2  ">
      <nav className="flex justify-between w ">
        <ul className="text-2xl flex justify-between w-full p-2">
          <div className="flex justify-start cursor-pointer">
            <li>
              <FaDev className="w-[35px] h-[35px] mr-2" />
            </li>
            <li>VideoHood</li>
          </div>
          <div className="flex justify-end">
            <li className="mr-4 hover:text-[#555d6e]">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-4 hover:text-[#555d6e]">
              <NavLink to="/movies/new">Add Movie</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
