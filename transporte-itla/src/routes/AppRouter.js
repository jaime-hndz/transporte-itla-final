import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { usuario } from '../helpers/UserProvider';
import { LoginScreen } from '../pages/LoginScreen';
import PrivateRoutes from './PrivateRoutes';


const AppRouter = () => {
  return (
    <>
    <Router>
      <Routes>
        {usuario ? <Route path="/*" element={<PrivateRoutes />} /> : <Route path="/" element={<LoginScreen />} />}
      </Routes>
    </Router>
    </>
  );
}

export default AppRouter;
