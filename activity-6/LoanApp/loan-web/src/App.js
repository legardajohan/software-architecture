import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/UI/header/src/Header';
import AppRoutes from './routes/Routes';
import './style/style.scss';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Header />
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;