import React from "react";
import StatPill from "./StatPill";

function InvoicePreview({ invoice, total }) {
  return (
    <div className="section">
      <div className="previewTitle">Invoice Preview</div>
      <div className="invoice">
        <div className="stats">
          <StatPill label="Client" value={invoice.clientName} />
          <StatPill label="Email" value={invoice.email} />
          <StatPill label="Total" value={`₹${total}`} />
        </div>
        <div style={{ marginTop: 12 }}>
          <div className="label">Item</div>
          <div className="k">{invoice.item || "—"}</div>
        </div>
      </div>
    </div>
  );
}

export default InvoicePreview;

