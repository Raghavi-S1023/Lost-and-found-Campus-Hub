import { useState } from "react";
import ItemCard from "../components/ItemCard";
import lostItems from "../data/lostItems";

const LostItems = () => {
  const [search, setSearch] = useState("");

  const filteredItems = lostItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold">Lost Items</h1>
          <p className="text-gray-400 mt-2">
            Browse reported lost items on campus.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search Item..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 px-4 py-3 rounded-xl outline-none w-80"
        />

      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}

      </div>

    </div>
  );
};

export default LostItems;
