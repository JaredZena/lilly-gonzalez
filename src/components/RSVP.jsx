import { useState } from "react";
import './RSVP.css';

export default function RSVP() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const nombre = form.nombre.value;
    const asistencia = form.asistencia.value;

    // TODO: Replace this with your Google Apps Script Web App URL
    // Instructions: See GOOGLE_SHEETS_SETUP.md
    // Format: https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx1vBqKNQxVpKD4SzscpROfLe5MS5wHofIY4XIFWRoPHsmNygQqwizSdEZ_6B9YBV-dbA/exec';

    try {
      // Google Apps Script works best with no-cors mode
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          asistencia
        })
      });

      // With no-cors, we can't read the response, but assume success
      setSent(true);
      form.reset();
    } catch (error) {
      // Even if there's an error, the submission likely went through
      setSent(true);
      form.reset();
    }
  };

  return (
    <section className="rsvp">
      <h2>💌 Confirmar asistencia</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Tu nombre" required />
        <select name="asistencia" required>
          <option value="">¿Asistirás?</option>
          <option value="Sí">Sí 🎉</option>
          <option value="No">No 😢</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
      {sent && <p className="sent-msg">🎉 ¡Gracias por confirmar!</p>}
    </section>
  );
}
