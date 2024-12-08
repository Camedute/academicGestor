import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

// Vistas del gestor
import Autentication from './views/autentication.tsx';
import Home from './views/home.tsx';
import Report from './views/report.tsx';
import Student from './views/student.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Autentication />} />
        <Route path="/home" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
