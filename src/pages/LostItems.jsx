import { useEffect, useState } from "react";
import API from "../services/api";
import ItemCard from "../components/ItemCard";

const LostItems = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {

    API.get("/items/lost")
      .then((res) => setItems(res.data))
      .catch(console.error);

  }, []);

  return (

    <div>

      <h1 className="text-4xl font-bold mb-8">
        Lost Items
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {items.map((item) => (

          <ItemCard
            key={item._id}
            item={item}
          />

        ))}

      </div>

    </div>

  );
};

export default LostItems;
