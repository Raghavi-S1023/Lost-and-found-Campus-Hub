const DashboardCard = ({ title, value, color, icon }) => {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 shadow-lg hover:scale-105 duration-300">

      <div className={`${color} w-14 h-14 rounded-xl flex items-center justify-center text-2xl`}>
        {icon}
      </div>

      <h3 className="text-gray-400 mt-5">
        {title}
      </h3>

      <h1 className="text-4xl font-bold mt-2">
        {value}
      </h1>

    </div>
  );
};

export default DashboardCard;
