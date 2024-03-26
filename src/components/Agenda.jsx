
import React, { useState } from 'react';
import FormularioEvento from './FormularioEvento';
import ListaEventos from './ListaEventos';

const Agenda = () => {
  const [eventos, setEventos] = useState([]);

  const agregarEvento = (evento) => {
    setEventos([...eventos, evento]);
  };

  return (
    <div className="agenda">
      <h2>Agenda</h2>
      <FormularioEvento agregarEvento={agregarEvento} />
      <ListaEventos eventos={eventos} />
    </div>
  );
};

export default Agenda;
