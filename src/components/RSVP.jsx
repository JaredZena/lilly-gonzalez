import { useState } from "react";
import './RSVP.css';

export default function RSVP() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnqeybko", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSent(true);
        form.reset();
      } else {
        alert("Hubo un problema al enviar el formulario. Por favor intenta de nuevo.");
      }
    } catch (error) {
      alert("Error de conexión.");
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
