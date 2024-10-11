import React, { useState } from 'react';

const LoanForm = () => {
  const [user_id, setUserId] = useState('');
  const [article_id, setArticleId] = useState('');
  const [loan_date, setLoanDate] = useState('');
  const [return_date, setReturnDate] = useState('');
  const [state, setState] = useState('Pendiente');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para enviar los datos al backend

    const newLoan = {
      user_id,
      article_id,
      loan_date,
      return_date,
      state
    }; 

    console.log('Nuevo prestamo: ', newLoan);

  try {
    const response = await fetch("http://localhost:3003/loans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newLoan)
      });
    
    if (response.ok) {
      console.log("Usuario guardado correctamente");
      // Reiniciar el formulario o mostrar un mensaje de éxito
    } else {
      console.error("Error al guardar el usuario");
    }
  } catch (error) {
    console.error("Error en la solicitud: ", error);
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Préstamo</h2>
      <input type="text" placeholder="ID de Usuario" value={user_id} onChange={(e) => setUserId(e.target.value)} required />
      <input type="text" placeholder="ID de Artículo" value={article_id} onChange={(e) => setArticleId(e.target.value)} required />
      <input type="date" value={loan_date} onChange={(e) => setLoanDate(e.target.value)} required />
      <input type="date" value={return_date} onChange={(e) => setReturnDate(e.target.value)} />
      <select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="pendiente">Pendiente</option>
        <option value="devuelto">Devuelto</option>
        <option value="atrasado">Atrasado</option>
      </select>
      <button type="submit">Registrar Préstamo</button>
    </form>
  );
};

export default LoanForm;
