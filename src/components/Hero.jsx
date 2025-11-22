import React from "react";
import baby1 from "../assets/lilly_baby_1.jpg";
import baby2 from "../assets/lilly-baby-2.jpg";
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="title">¡Felicidades, Dra. Lilly González! 🎓</h1>
      <p className="subtitle">
        Después de años de esfuerzo, guardias y desvelos… llegó el gran día.
      </p>
      <div className="hero-photos">
        <img src={baby1} alt="Foto bebé 1" />
        <img src={baby2} alt="Foto bebé 2" />
      </div>
    </section>
  );
}
