import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importar estilos de toastify

// Obtenemos el token de localStorage
const token = localStorage.getItem('token');

const LoanForm = () => {
  // Estado único para todos los campos del formulario
  const [loanForm, setLoanForm] = useState({
    user_id: '',
    article_id: '',
    loan_date: '',
    return_date: '',
    state: 'Pendiente'
  });

  // Manejar los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanForm({
      ...loanForm,
      [name]: value // Cambia el valor correspondiente al campo
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para enviar los datos al backend
    const newLoan = { ...loanForm }; // Usamos el estado con los datos

    console.log('Nuevo prestamo: ', newLoan);
    console.log('Token antes de enviar front:', token);

  try {
    const response = await fetch("http://localhost:3003/loans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token // Aquí envías el token
        },
        body: JSON.stringify(newLoan)
      });
      console.log('Token de front: ', token);
    
    if (response.ok) {
      console.log("Préstamo guardado correctamente");
      // Mostramos el toast de prestamo registrado correctamente
      toast.success('¡Préstamo registrado correctamente!');
      // Reiniciar el formulario o mostrar un mensaje de éxito
      setLoanForm({
        user_id: '',
        article_id: '',
        loan_date: '',
        return_date: '',
        state: 'Pendiente'
      });
    } else {
      console.error("Error al guardar el préstamo");
      // Toast de error
      toast.error('Error al registrar el préstamo');
    }
  } catch (error) {
    console.error("Error en la solicitud");
    toast.error('Error con la solicitud: ', error); // Mostramos toast de captura del error
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Préstamo</h2>
      <input type="text" name="user_id" placeholder="ID de Usuario" value={loanForm.user_id} onChange={handleInputChange} required />
      <input type="text" name="article_id" placeholder="ID de Artículo" value={loanForm.article_id} onChange={handleInputChange} required />
      <input type="date" name="loan_date" value={loanForm.loan_date} onChange={handleInputChange} required />
      <input type="date" name="return_date" value={loanForm.return_date} onChange={handleInputChange} />
      <select name="state" value={loanForm.state} onChange={handleInputChange}>
        <option value="Pendiente">Pendiente</option>
        <option value="Devuelto">Devuelto</option>
        <option value="Atrasado">Atrasado</option>
      </select>
      <button type="submit">Registrar Préstamo</button>
      {/* Contenedor para mostrar los toast */}
      <ToastContainer />
    </form>
  );
};

export default LoanForm;