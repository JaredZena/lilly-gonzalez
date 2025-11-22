import { useEffect, useState } from "react";
import './Countdown.css';

export default function CountdownTimer() {
  const target = new Date("2025-12-20T18:00:00");
  const calc = () => {
    const now = new Date().getTime();
    const diff = target.getTime() - now;
    if (diff <= 0)
      return { done: true, days: 0, hours: 0, minutes: 0 };
    return {
      done: false,
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    };
  };

  const [timer, setTimer] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setTimer(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="countdown">
      <h2>⏳ Falta para el gran día</h2>
      {timer.done ? (
        <p className="count-text">🎓 ¡Hoy es la graduación!</p>
      ) : (
        <div className="countdown-boxes">
          <div className="countdown-box">
            <span className="countdown-number">{timer.days}</span>
            <span className="countdown-label">Días</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-box">
            <span className="countdown-number">{timer.hours}</span>
            <span className="countdown-label">Horas</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-box">
            <span className="countdown-number">{timer.minutes}</span>
            <span className="countdown-label">Minutos</span>
          </div>
        </div>
      )}
    </section>
  );
}
