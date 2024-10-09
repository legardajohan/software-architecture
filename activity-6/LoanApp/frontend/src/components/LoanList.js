import React, { useEffect, useState } from 'react';

function LoanList() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/loans')  // Cambia el puerto y ruta según tu configuración
      .then((response) => response.json())
      .then((data) => setLoans(data))
      .catch((error) => console.error('Error fetching loans:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Préstamos</h2>
      <ul>
        {loans.map((loan) => (
          <li key={loan.id}>
            <p>Usuario ID: {loan.user_id}</p>
            <p>Artículo ID: {loan.article_id}</p>
            <p>Fecha de préstamo: {loan.loan_date}</p>
            <p>Fecha de devolución: {loan.return_date || 'Pendiente'}</p>
            <p>Estado: {loan.state}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LoanList;
