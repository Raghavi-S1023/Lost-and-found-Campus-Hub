import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

/* ===========================
   Mongoose Schema
=========================== */

const itemSchema = new mongoose.Schema(
  {
    type: String,
    itemName: String,
    category: String,
    location: String,
    date: String,
    description: String,
    contact: String,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

/* ===========================
        Routes
=========================== */

// Home
app.get("/", (req, res) => {
  res.json({
    message: "CampusHub Backend Running 🚀",
  });
});

// Dashboard Stats
app.get("/dashboard", async (req, res) => {
  const lost = await Item.countDocuments({ type: "Lost" });

  const found = await Item.countDocuments({ type: "Found" });

  const total = await Item.countDocuments();

  res.json({
    lost,
    found,
    total,
  });
});

// Get Lost Items
app.get("/items/lost", async (req, res) => {
  const items = await Item.find({ type: "Lost" });

  res.json(items);
});

// Get Found Items
app.get("/items/found", async (req, res) => {
  const items = await Item.find({ type: "Found" });

  res.json(items);
});

// Report Item
app.post("/items", async (req, res) => {
  try {
    const item = new Item(req.body);

    await item.save();

    res.status(201).json({
      message: "Item Reported Successfully",
      item,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// Claim Item
app.put("/claim/:id", async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      {
        status: "Claimed",
      },
      {
        new: true,
      }
    );

    res.json(item);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// Delete Item
app.delete("/items/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);

  res.json({
    message: "Item Deleted",
  });
});

app.listen(process.env.PORT, () => {
  console.log(
    `🚀 Server running on http://localhost:${process.env.PORT}`
  );
});
