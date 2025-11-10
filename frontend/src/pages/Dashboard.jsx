import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import InvoiceForm from "../components/InvoiceForm";
import InvoicePreview from "../components/InvoicePreview";
import InvoiceTable from "../components/InvoiceTable";
import { createInvoice, getInvoices, getHealth } from "../services/api";

function Dashboard() {
  const [invoice, setInvoice] = useState({ clientName: "", email: "", item: "", quantity: "", price: "" });
  const [message, setMessage] = useState("");
  const [invoices, setInvoices] = useState([]);
  const [backendStatus, setBackendStatus] = useState("Checking...");

  const handleChange = (e) => setInvoice({ ...invoice, [e.target.name]: e.target.value });

  const fetchInvoices = async () => {
    try {
      const { data } = await getInvoices();
      setInvoices(data);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createInvoice(invoice);
      setMessage("✅ Invoice saved successfully!");
      setInvoice({ clientName: "", email: "", item: "", quantity: "", price: "" });
      fetchInvoices();
    } catch (error) {
      console.error("Error saving invoice:", error);
      setMessage("❌ Failed to save invoice");
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getHealth();
        if (data?.status === "ok") setBackendStatus("Connected");
        else setBackendStatus("Unavailable");
      } catch {
        setBackendStatus("Unavailable");
      }
      fetchInvoices();
    })();
  }, []);

  const total = invoice.quantity * invoice.price || 0;

  return (
    <div className="container">
      <Header title="🧾 Invoice Generator" statusText="Backend" status={backendStatus} />
      <div className="grid">
        <Card>
          <InvoiceForm
            invoice={invoice}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onReset={() => setInvoice({ clientName: "", email: "", item: "", quantity: "", price: "" })}
            message={message}
          />
        </Card>
        <Card>
          <InvoicePreview invoice={invoice} total={total} />
        </Card>
      </div>
      <InvoiceTable invoices={invoices} />
    </div>
  );
}

export default Dashboard;

