import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArticleForm from '../components/article/src/ArticleForm';
import ArticleList from '../components/article/src/ArticleList';
import LoanForm from '../components/loan/src/LoanForm';
import LoanList from '../components/loan/src/LoanList';
import Login from '../components/user/src/UserLogin';
import Register from '../components/user/src/UserRegister';
import UserList from '../components/user/src/UserList';
import PrivateRoute from './PrivateRoute'; // Importar PrivateRoute

const AppRoutes = () => {
    return (
        <Routes>
          {/* Rutas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loans" element={<LoanList />} />

          {/* Rutas protegidas usando PrivateRoute */}
          <Route 
            path="/articles/new" 
            element={<PrivateRoute><ArticleForm /></PrivateRoute>} 
          />
          <Route 
            path="/loans/new" 
            element={<PrivateRoute><LoanForm /></PrivateRoute>} 
          />
          <Route 
            path="/users" 
            element={<PrivateRoute><UserList /></PrivateRoute>} 
          />
          <Route 
            path="/articles" 
            element={<PrivateRoute><ArticleList /></PrivateRoute>} 
          />
        </Routes>
    )
}

export default AppRoutes;