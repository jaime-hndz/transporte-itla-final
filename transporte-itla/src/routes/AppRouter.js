import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../pages/LoginScreen';
import PrivateRoutes from './PrivateRoutes';


const AppRouter = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<PrivateRoutes />} />
      </Routes>
    </Router>
    </>
  );
}

export default AppRouter;
