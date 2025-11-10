const express = require("express");
const { createInvoice, getInvoices } = require("../controllers/invoiceController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createInvoice);
router.get("/", protect, getInvoices);

module.exports = router;

