import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../pages/HomeScreen';
import { LoginScreen } from '../pages/LoginScreen';

const AppRouter = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/Home" element={<HomeScreen />} />
      </Routes>
    </Router>
    </>
  );
}

export default AppRouter;
