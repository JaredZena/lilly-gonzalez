import React, { useEffect, useState } from "react";

export default function QRCodeSection() {
  const [finalURL, setFinalURL] = useState("https://graduacionlilly.netlify.app");
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setFinalURL(window.location.href);
    }
  }, []);
  
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
