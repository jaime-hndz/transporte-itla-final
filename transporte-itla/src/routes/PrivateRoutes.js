import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "../pages/HomeScreen";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Paper } from "@mui/material";
import { Container } from "@mui/system";
import RequestsScreen from "../pages/RequestsScreen";
import { PaymentMethodsScreen } from "../pages/PaymentMethodsScreen";
import { ScheduleScreen } from "../pages/ScheduleScreen";
import { useEffect } from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const PrivateRoutes = () => {

  useEffect(() => {
    if (!cookies.get('usuario')) {
      window.location.href="./login"
    }
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Paper
          elevation={2}
          style={{ padding: "40px", margin: "40px", marginBottom: "160px" }}
        >
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/solicitudes" element={<RequestsScreen />} />
            <Route path="/formas" element={<PaymentMethodsScreen />} />
            <Route path="/horarios" element={<ScheduleScreen />} />
          </Routes>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default PrivateRoutes;
