//importaremos todos los Homes y que jueguen dependiendo del backend para no crear ruta por ruta
import { NotFoundPage } from "../Pages/NotFoundPage";
import { AdminHome } from '../Pages/ADMIN/AdminHome';
import { HomeDoctor } from '../Pages/Doctor/HomeDoctor';
import { HomeWorker } from '../Pages/Worker/HomeWorker';

const RoleBasedHome = () => {
    const userDetails = localStorage.getItem('user');
    const role = userDetails ? JSON.parse(userDetails).role : null;
  
    switch (role) {
      case 'ADMIN':
        return <AdminHome />;
      case 'DOCTOR':
        return <HomeDoctor />;
      case 'WORKER':
        return <HomeWorker />;
      default:
        return <NotFoundPage />;
    }
  };
  
  export default RoleBasedHome;