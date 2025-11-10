const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    item: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, min: 0 },
    price: { type: Number, required: true, min: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);

