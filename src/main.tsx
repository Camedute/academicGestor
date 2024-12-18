import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

// Vistas del gestor
import Autentication from './views/autentication.tsx';
import Home from './views/home.tsx';
import Student from './views/student.tsx';
import { AuthProvider } from './context/authContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Autentication />} />
        <Route path="/home" element={<Home />} />
        <Route path="/student" element={<Student />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
