import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UserForm from './components/UserForm';
import ArticleForm from './components/ArticleForm';
import LoanForm from './components/LoanForm';
import UserList from './components/UserList';
import ArticleList from './components/ArticleList';
import LoanList from './components/LoanList';
import './style/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/users/new" element={<UserForm />} />
          <Route path="/articles/new" element={<ArticleForm />} />
          <Route path="/loans/new" element={<LoanForm />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/loans" element={<LoanList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
