import React from 'react';

const Evento = ({ evento }) => {
  return (
    <div className="evento">
      <h3>{evento.titulo}</h3>
      <p>{evento.fecha} - {evento.hora}</p>
      <p>{evento.descripcion}</p>
    </div>
  );
}

export default Evento;
