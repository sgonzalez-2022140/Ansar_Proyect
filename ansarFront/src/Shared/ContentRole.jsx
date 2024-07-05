import { Routes, Route, Navigate } from 'react-router-dom';

//Admin pages
import { AdminHome } from '../Pages/ADMIN/AdminHome';
import LayoutMain from '../Components/User/LayoutMain';

//Doctores
import { HomeDoctor } from '../Pages/Doctor/HomeDoctor';
//Trabajadores
import { HomeWorker } from '../Pages/Worker/HomeWorker';
//Not Found
import { NotFoundPage } from '../Pages/NotFoundPage';




export const ContentRole = () => {
  // Buscaremos el user
  const userDetails = localStorage.getItem('user');
  // Extraemos el rol
  const role = userDetails ? JSON.parse(userDetails).role : null;

  return (
    <Routes>
      {role === 'ADMIN' ? (
        <Route path="*" element={<Navigate replace to="/admin-home" />} />
      ) : role === 'DOCTOR' ? (
        <Route path="*" element={<Navigate replace to="/doctor-home" />} />
      ) : role === 'WORKER' ? (
        <Route path="*" element={<Navigate replace to="/worker-home" />} />
      ) : (
        <Route path="*" element={<NotFoundPage />} />
      )}
    </Routes>
  );
};