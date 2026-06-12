import { FaBell, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-slate-900 rounded-xl p-4 flex justify-between items-center mb-8">

      <h2 className="text-2xl font-bold">
        Lost & Found Campus Hub
      </h2>

      <div className="flex items-center gap-4">

        <div className="bg-slate-800 rounded-lg px-4 py-2 flex items-center gap-3">

          <FaSearch />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />

        </div>

        <button className="bg-cyan-500 p-3 rounded-lg">

          <FaBell />

        </button>

      </div>

    </div>
  );
};

export default Navbar;
