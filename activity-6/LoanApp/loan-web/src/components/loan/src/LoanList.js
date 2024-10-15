import '../style/loan.scss';
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
      <h2>Préstamos</h2>
      <table>
        <thead>
            <tr>
                <th>ID Usuario</th>
                <th>ID Artículo</th>
                <th>Fecha de préstamo</th>
                <th>Fecha de devolución</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan._id}>
              <td>{loan.user_id}</td>
              <td>{loan.article_id}</td>
              <td>{loan.loan_date}</td>
              <td>{loan.return_date}</td>
              <td>{loan.state}</td>
            </tr>
          ))}           
        </tbody>
    </table>

    </div>
  );
}

export default LoanList;
