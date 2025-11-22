import React from "react";

export default function QRCodeSection() {
  const finalURL = "https://lilly-gonzalez.vercel.app/";
  
  return (
    <section className="qr">
      <h2>📱 Comparte la invitación</h2>
      <p>Escanea el código para abrir la página.</p>
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
          finalURL
        )}`}
        alt="QR"
        className="qr-img"
      />
    </section>
  );
}
