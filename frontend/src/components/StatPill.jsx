import React from "react";

function StatPill({ label, value }) {
  return (
    <div className="stat">
      <div className="label">{label}</div>
      <div className="k">{value || "—"}</div>
    </div>
  );
}

export default StatPill;

