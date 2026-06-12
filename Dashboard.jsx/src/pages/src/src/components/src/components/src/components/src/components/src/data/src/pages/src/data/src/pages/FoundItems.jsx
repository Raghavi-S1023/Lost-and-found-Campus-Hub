import { useState } from "react";
import ItemCard from "../components/ItemCard";
import foundItems from "../data/foundItems";

const FoundItems = () => {
  const [search, setSearch] = useState("");

  const filteredItems = foundItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold">Found Items</h1>
          <p className="text-gray-400 mt-2">
            Recently found items reported on campus.
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

export default FoundItems;
