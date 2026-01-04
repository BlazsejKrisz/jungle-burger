import * as React from "react";

export function ContactStoreEmail({
  name,
  email,
  message,
}: {
  name?: string;
  email: string;
  message: string;
}) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "32px" }}>
      <h2>Új kapcsolatfelvétel</h2>

      <p><strong>Név:</strong> {name || "—"}</p>
      <p><strong>Email:</strong> {email}</p>

      <div
        style={{
          marginTop: "16px",
          padding: "16px",
          borderRadius: "12px",
          background: "#f7f7f7",
          whiteSpace: "pre-wrap",
        }}
      >
        {message}
      </div>

      <p style={{ marginTop: "24px", fontSize: "12px", color: "#555" }}>
        Válaszolj erre az emailre – a reply-to a feladó címe.
      </p>
    </div>
  );
}
