import * as React from "react";

export function ContactThanksEmail({ name }: { name?: string }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#ffffff", padding: "32px" }}>
      <h1 style={{ color: "#9fd20c", fontSize: "24px" }}>
        Köszönjük, hogy felvetted velünk a kapcsolatot{ name ? `, ${name}` : "" }!
      </h1>

      <p style={{ fontSize: "14px", color: "#111" }}>
        Megkaptuk az üzeneted, és hamarosan válaszolunk.
      </p>

      <div
        style={{
          marginTop: "24px",
          padding: "16px",
          borderRadius: "16px",
          background: "#f7f7f7",
        }}
      >
        <strong>Jungle Burger</strong>
        <br />
        1165 Budapest, Bökényföldi út 6
        <br />
        +36 70 590 9421
      </div>

      <p style={{ marginTop: "24px", fontSize: "12px", color: "#555" }}>
        Ez egy automatikus üzenet.
      </p>
    </div>
  );
}
