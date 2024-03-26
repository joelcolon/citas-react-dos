import React, { useState } from 'react';

const FormularioEvento = ({ agregarEvento }) => {
  const [evento, setEvento] = useState({
    titulo: '',
    fecha: '',
    hora: '',
    descripcion: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvento({
      ...evento,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (evento.titulo && evento.fecha && evento.hora && evento.descripcion) {
      agregarEvento(evento);
      setEvento({
        titulo: '',
        fecha: '',
        hora: '',
        descripcion: ''
      });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <form  className="nuevo-evento" onSubmit={handleSubmit}>
      <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={evento.titulo}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="fecha"
        value={evento.fecha}
        onChange={handleInputChange}
      />
      <input
        type="time"
        name="hora"
        value={evento.hora}
        onChange={handleInputChange}
      />
      <textarea
        name="descripcion"
        placeholder="Descripción"
        value={evento.descripcion}
        onChange={handleInputChange}
      ></textarea>
      <button type="submit">Agregar Evento</button>
    </form>
  );
};

export default FormularioEvento;
