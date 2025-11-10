import React from "react";

function Header({ title, statusText, status }) {
  return (
    <>
      <h1>{title}</h1>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <span
          style={{
            display: "inline-block",
            padding: "6px 10px",
            borderRadius: 999,
            fontWeight: 700,
            fontSize: 12,
            background: status === "Connected" ? "#ecfdf5" : "#fef2f2",
            color: status === "Connected" ? "#065f46" : "#991b1b",
            border: status === "Connected" ? "1px solid #86efac" : "1px solid #fecaca",
          }}
        >
          {statusText}: {status}
        </span>
      </div>
    </>
  );
}

export default Header;

