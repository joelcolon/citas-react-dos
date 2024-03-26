import React from 'react';
import Evento from './Evento';

const ListaEventos = ({ eventos }) => {
  return (
    <div className="lista-eventos">
      {eventos.map((evento, index) => (
        <Evento key={index} evento={evento} />
      ))}
    </div>
  );
}

export default ListaEventos;
