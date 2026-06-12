import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ReportItem = () => {
  const [formData, setFormData] = useState({
    type: "Lost",
    itemName: "",
    category: "",
    location: "",
    date: "",
    description: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Item reported successfully!");

    setFormData({
      type: "Lost",
      itemName: "",
      category: "",
      location: "",
      date: "",
      description: "",
      contact: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto">

      <Toaster position="top-right" />

      <h1 className="text-4xl font-bold mb-2">
        Report an Item
      </h1>

      <p className="text-gray-400 mb-8">
        Help others by reporting a lost or found item.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 rounded-2xl p-8 space-y-5"
      >

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-slate-800"
        >
          <option>Lost</option>
          <option>Found</option>
        </select>

        <input
          type="text"
          name="itemName"
          placeholder="Item Name"
          value={formData.itemName}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-slate-800"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-slate-800"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-slate-800"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-slate-800"
          required
        />

        <textarea
          rows="5"
          name="description"
          placeholder="Describe the item..."
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-slate-800"
        />

        <input
          type="email"
          name="contact"
          placeholder="Contact Email"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-slate-800"
          required
        />

        <button
          className="bg-cyan-500 hover:bg-cyan-600 w-full py-4 rounded-xl font-semibold"
        >
          Submit Report
        </button>

      </form>

    </div>
  );
};

export default ReportItem;
