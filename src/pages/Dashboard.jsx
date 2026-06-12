import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {

  const [stats, setStats] = useState({
    lost: 0,
    found: 0,
    total: 0,
  });

  useEffect(() => {

    API.get("/dashboard")
      .then((res) => setStats(res.data))
      .catch(console.error);

  }, []);

  return (

    <div>

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-slate-900 p-6 rounded-xl">

          <h2 className="text-gray-400">
            Lost Items
          </h2>

          <h1 className="text-5xl font-bold mt-4 text-red-400">
            {stats.lost}
          </h1>

        </div>

        <div className="bg-slate-900 p-6 rounded-xl">

          <h2 className="text-gray-400">
            Found Items
          </h2>

          <h1 className="text-5xl font-bold mt-4 text-green-400">
            {stats.found}
          </h1>

        </div>

        <div className="bg-slate-900 p-6 rounded-xl">

          <h2 className="text-gray-400">
            Total Reports
          </h2>

          <h1 className="text-5xl font-bold mt-4 text-cyan-400">
            {stats.total}
          </h1>

        </div>

      </div>

    </div>

  );
};

export default Dashboard;
