import React from "react";

function InvoiceTable({ invoices }) {
  return (
    <div className="tableCard">
      <div className="section">
        <div className="formTitle">📜 Saved Invoices</div>
      </div>
      <div className="tableWrap">
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Email</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoices.length > 0 ? (
              invoices.map((inv) => (
                <tr key={inv._id}>
                  <td>{inv.clientName}</td>
                  <td>{inv.email}</td>
                  <td>{inv.item}</td>
                  <td>{inv.quantity}</td>
                  <td>₹{inv.price}</td>
                  <td>₹{inv.quantity * inv.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No invoices saved yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InvoiceTable;

