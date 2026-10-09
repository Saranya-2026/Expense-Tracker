import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-lg px-8 py-4 flex justify-between items-center">
      
      <h1 className="text-3xl font-bold text-white">
        Expense Tracker
      </h1>

      <div className="space-x-6">
        <NavLink
          to="/"
          className="text-white font-semibold hover:text-yellow-300 transition duration-300"
        >
          Home
        </NavLink>

        <NavLink
          to="/add"
          className="text-white font-semibold hover:text-yellow-300 transition duration-300"
        >
          Add Expense
        </NavLink>

        <NavLink
          to="/about"
          className="text-white font-semibold hover:text-yellow-300 transition duration-300"
        >
          About
        </NavLink>
      </div>

    </nav>
  );
};

export default Navbar;