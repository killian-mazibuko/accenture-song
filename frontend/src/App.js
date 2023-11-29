import React from 'react';
import HomePage from './screens/HomePage';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
