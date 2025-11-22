import React from "react";
import './Details.css';

export default function Details() {
  return (
    <section className="details">
      <h2>✨ Detalles de la celebración ✨</h2>
      <div className="detail-item">
        <h3>📅 Fecha</h3>
        <p>20 de diciembre de 2025</p>
      </div>
      <div className="detail-item">
        <h3>⛪ Misa</h3>
        <p>6:00 PM — Catedral de Durango</p>
      </div>
      <div className="detail-item">
        <h3>🎉 Fiesta</h3>
        <p>Después de la misa — Salón Imperia</p>
      </div>
      <div className="maps">
        <a
          href="https://maps.app.goo.gl/YdK4pNPLy9av3SyA6"
          target="_blank"
          rel="noreferrer"
        >
          Ver Catedral
        </a>
        <a
          href="https://maps.app.goo.gl/nRTg8xZC9z5v6H1B9"
          target="_blank"
          rel="noreferrer"
        >
          Ver Salón Imperia
        </a>
      </div>
    </section>
  );
}
