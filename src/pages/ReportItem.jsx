import API from "../services/api";

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await API.post("/items", formData);

    toast.success("Item Reported Successfully!");

    setFormData({
      type: "Lost",
      itemName: "",
      category: "",
      location: "",
      date: "",
      description: "",
      contact: "",
    });

  } catch (error) {
    toast.error("Something went wrong!");
  }
};
