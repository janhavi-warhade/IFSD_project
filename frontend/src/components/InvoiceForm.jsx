import React from "react";

function InvoiceForm({ invoice, onChange, onSubmit, onReset, message }) {
  return (
    <div className="section">
      <div className="formTitle">Create Invoice</div>
      <form className="form" onSubmit={onSubmit}>
        <div className="input full">
          <label className="label" htmlFor="clientName">Client Name</label>
          <input
            id="clientName"
            className="control"
            type="text"
            name="clientName"
            placeholder="e.g., Acme Corp"
            value={invoice.clientName}
            onChange={onChange}
            required
          />
        </div>
        <div className="input full">
          <label className="label" htmlFor="email">Client Email</label>
          <input
            id="email"
            className="control"
            type="email"
            name="email"
            placeholder="client@email.com"
            value={invoice.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="input full">
          <label className="label" htmlFor="item">Item Description</label>
          <input
            id="item"
            className="control"
            type="text"
            name="item"
            placeholder="Design services, product, etc."
            value={invoice.item}
            onChange={onChange}
            required
          />
        </div>
        <div className="input">
          <label className="label" htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            className="control"
            type="number"
            name="quantity"
            placeholder="0"
            value={invoice.quantity}
            onChange={onChange}
            required
          />
        </div>
        <div className="input">
          <label className="label" htmlFor="price">Price per Item</label>
          <input
            id="price"
            className="control"
            type="number"
            name="price"
            placeholder="0"
            value={invoice.price}
            onChange={onChange}
            required
          />
        </div>
        <div className="actions full">
          <button className="button" type="submit">💾 Save Invoice</button>
          <button className="button subtle" type="button" onClick={onReset}>
            Reset
          </button>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default InvoiceForm;

