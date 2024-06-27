import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="absolute w-full flex justify-between items-center px-16 py-4 bg-transparant">
        <img src="/img/logo-fgs.png" />
        <ul className="flex gap-8 font-bold text-white text-base">
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/penginapan">Penginapan</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
