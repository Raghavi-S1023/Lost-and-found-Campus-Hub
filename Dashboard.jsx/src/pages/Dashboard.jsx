import React from "react";
import {
  FaBoxOpen,
  FaSearch,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    {
      title: "Lost Items",
      value: 28,
      color: "bg-red-500",
      icon: <FaSearch size={22} />,
    },
    {
      title: "Found Items",
      value: 34,
      color: "bg-green-500",
      icon: <FaBoxOpen size={22} />,
    },
    {
      title: "Successfully Reunited",
      value: 18,
      color: "bg-blue-500",
      icon: <FaCheckCircle size={22} />,
    },
    {
      title: "Active Campus Zones",
      value: 8,
      color: "bg-yellow-500",
      icon: <FaMapMarkerAlt size={22} />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Welcome back!
        </h1>

        <p className="text-gray-400 mt-2">
          Here's what's happening in your campus community today.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl p-6 shadow-lg hover:scale-105 duration-300"
          >

            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}
            >
              {item.icon}
            </div>

            <h3 className="text-gray-400 mt-5">
              {item.title}
            </h3>

            <h2 className="text-4xl font-bold mt-2">
              {item.value}
            </h2>

          </div>
        ))}

      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        <div className="bg-slate-900 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-5">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-800 rounded-xl p-4">
              🎒 Backpack reported lost near Library
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              🔑 Keys found in Parking Area
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              💳 Student ID successfully returned
            </div>

          </div>

        </div>

        <div className="bg-slate-900 rounded-2xl p-6">

          <h2 className="text-2xl font-semibold mb-5">
            Recovery Tips
          </h2>

          <ul className="space-y-4 text-gray-300">

            <li>✔ Report items immediately.</li>

            <li>✔ Add clear descriptions.</li>

            <li>✔ Mention exact location.</li>

            <li>✔ Upload images if available.</li>

            <li>✔ Keep contact information updated.</li>

          </ul>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;
