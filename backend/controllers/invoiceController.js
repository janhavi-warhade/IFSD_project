const Invoice = require("../models/Invoice");

exports.createInvoice = async (req, res) => {
  try {
    const { clientName, email, item, quantity, price } = req.body;
    const invoice = await Invoice.create({ clientName, email, item, quantity, price });
    return res.status(201).json(invoice);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to create invoice" });
  }
};

exports.getInvoices = async (_req, res) => {
  try {
    const invoices = await Invoice.find().sort({ createdAt: -1 });
    return res.json(invoices);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch invoices" });
  }
};

