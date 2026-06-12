import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaBoxOpen,
  FaPlusCircle,
  FaClipboardList,
  FaUserCircle,
} from "react-icons/fa";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", path: "/", icon: <FaHome /> },
    { name: "Lost Items", path: "/lost", icon: <FaSearch /> },
    { name: "Found Items", path: "/found", icon: <FaBoxOpen /> },
    { name: "Report Item", path: "/report", icon: <FaPlusCircle /> },
    { name: "My Claims", path: "/claims", icon: <FaClipboardList /> },
  ];

  return (
    <div className="w-72 min-h-screen bg-slate-900 border-r border-slate-800">

      <div className="p-6">

        <h1 className="text-2xl font-bold text-cyan-400">
          🎒 CampusHub
        </h1>

        <p className="text-gray-400 text-sm">
          Lost & Found System
        </p>

      </div>

      <div className="px-4">

        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 rounded-xl mb-3 duration-300 ${
                isActive
                  ? "bg-cyan-500 text-white"
                  : "hover:bg-slate-800 text-gray-300"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}

      </div>

      <div className="absolute bottom-8 left-6">

        <div className="flex items-center gap-3">

          <FaUserCircle size={45} />

          <div>

            <h3 className="font-semibold">
              Student
            </h3>

            <p className="text-gray-400 text-sm">
              Campus Member
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Sidebar;
