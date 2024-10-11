import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ArticleForm from './components/article/src/ArticleForm';
import ArticleList from './components/article/src/ArticleList';
import LoanForm from './components/loan/src/LoanForm';
import LoanList from './components/loan/src/LoanList';
import UserForm from './components/user/src/UserForm';
import UserList from './components/user/src/UserList';
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
