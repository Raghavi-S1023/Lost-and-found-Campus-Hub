import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const ItemCard = ({ item }) => {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-300">

      <img
        src={item.image}
        alt={item.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">

        <div className="flex justify-between">

          <h2 className="text-xl font-semibold">
            {item.name}
          </h2>

          <span className="bg-cyan-500 px-3 py-1 rounded-full text-sm">
            {item.category}
          </span>

        </div>

        <p className="text-gray-400 mt-3">
          {item.description}
        </p>

        <div className="flex items-center gap-2 mt-5 text-gray-400">

          <FaMapMarkerAlt />

          {item.location}

        </div>

        <div className="flex items-center gap-2 mt-2 text-gray-400">

          <FaCalendarAlt />

          {item.date}

        </div>

        <button className="bg-cyan-500 w-full mt-6 py-3 rounded-xl font-semibold hover:bg-cyan-600">

          This is Mine

        </button>

      </div>

    </div>
  );
};

export default ItemCard;
