import React from "react";
import baby2 from "../assets/lilly_baby_2.png";
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-medical-symbol">
        <svg viewBox="0 0 300 200" className="stethoscope-heart-ecg-svg">
          {/* Stethoscope chest piece (left) */}
          <circle cx="30" cy="100" r="18" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="30" cy="100" r="8" fill="currentColor" />
          
          {/* Heart shape formed by stethoscope tubing */}
          <path 
            d="M 48 100 Q 60 80, 80 85 Q 100 90, 120 85 Q 140 80, 150 100 Q 150 110, 145 120 Q 140 130, 130 135 Q 120 140, 110 135 Q 100 130, 90 125 Q 80 120, 70 125 Q 60 130, 50 135 Q 40 130, 35 120 Q 30 110, 30 100 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4" 
            strokeLinecap="round"
            strokeLinejoin="round"
            className="heart-path"
          />
          
          {/* ECG waveform */}
          <polyline
            points="150,100 160,100 165,70 170,100 180,100 185,130 190,100 200,100 205,70 210,100 220,100 225,130 230,100 240,100 245,70 250,100 260,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ecg-wave"
          />
          
          {/* Stethoscope earpieces (right) */}
          <path d="M 260 100 Q 270 90, 280 85" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M 260 100 Q 270 110, 280 115" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
          <ellipse cx="280" cy="85" rx="6" ry="8" fill="currentColor" />
          <ellipse cx="280" cy="115" rx="6" ry="8" fill="currentColor" />
        </svg>
      </div>
      <h1 className="title">¡Felicidades, Dra. Lilly González! 🎓</h1>
      <p className="subtitle">
        Después de años de esfuerzo, guardias y desvelos… llegó el gran día.
      </p>
      <div className="hero-photo">
        <img src={baby2} alt="Dra. Lilly González" />
      </div>
    </section>
  );
}
