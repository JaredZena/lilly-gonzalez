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
          href="https://www.google.com/maps/search/?api=1&query=Catedral+de+Durango"
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 Ver Catedral en Google Maps
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Salon+Imperia+Durango"
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 Ver Salón Imperia en Google Maps
        </a>
      </div>
    </section>
  );
}
