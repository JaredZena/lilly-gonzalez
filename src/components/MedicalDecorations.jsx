import React from 'react';
import './MedicalDecorations.css';

export default function MedicalDecorations() {
  return (
    <>
      {/* Stethoscope decorative element */}
      <div className="stethoscope-decoration">
        <svg viewBox="0 0 200 200" className="stethoscope-svg">
          <path
            d="M 50 30 Q 30 50, 30 80 Q 30 120, 50 140 L 50 160 Q 50 170, 60 170 L 140 170 Q 150 170, 150 160 L 150 140 Q 170 120, 170 80 Q 170 50, 150 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="stethoscope-path"
          />
          <circle cx="50" cy="80" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="stethoscope-chest" />
          <circle cx="150" cy="80" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="stethoscope-chest" />
        </svg>
      </div>

      {/* ECG Waveform decorative element */}
      <div className="ecg-decoration">
        <svg viewBox="0 0 300 60" className="ecg-svg">
          <polyline
            points="0,30 20,30 25,10 30,30 50,30 55,50 60,30 80,30 85,10 90,30 110,30 115,50 120,30 140,30 145,10 150,30 170,30 175,50 180,30 200,30 205,10 210,30 230,30 235,50 240,30 260,30 265,10 270,30 290,30 300,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="ecg-wave"
          />
        </svg>
      </div>

      {/* Medical Cross decorative element */}
      <div className="medical-cross-decoration">
        <svg viewBox="0 0 100 100" className="medical-cross-svg">
          <rect x="40" y="20" width="20" height="60" rx="2" fill="currentColor" opacity="0.3" />
          <rect x="20" y="40" width="60" height="20" rx="2" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      {/* Heart decorative elements */}
      <div className="heart-decoration heart-1">
        <svg viewBox="0 0 50 50" className="heart-svg">
          <path
            d="M25,40 C25,40 10,25 10,15 C10,8 15,5 20,5 C23,5 25,7 25,10 C25,7 27,5 30,5 C35,5 40,8 40,15 C40,25 25,40 25,40 Z"
            fill="currentColor"
            className="heart-path"
          />
        </svg>
      </div>
      <div className="heart-decoration heart-2">
        <svg viewBox="0 0 50 50" className="heart-svg">
          <path
            d="M25,40 C25,40 10,25 10,15 C10,8 15,5 20,5 C23,5 25,7 25,10 C25,7 27,5 30,5 C35,5 40,8 40,15 C40,25 25,40 25,40 Z"
            fill="currentColor"
            className="heart-path"
          />
        </svg>
      </div>
    </>
  );
}

