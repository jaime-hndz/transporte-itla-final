import { Route, Routes } from "react-router-dom";
import { StudentHomeScreen } from "../pages/StudentScreens/StudentHomeScreen";
import { Footer } from "../components/Layout/Footer/Footer";
import { Header } from "../components/Layout/Header/Header";
import { Paper } from "@mui/material";
import { Container } from "@mui/system";
import {RequestsScreen} from "../pages/StudentScreens/RequestsScreen";
import { PaymentMethodsScreen } from "../pages/InformationScreens/PaymentMethodsScreen";
import { ScheduleScreen } from "../pages/InformationScreens/ScheduleScreen";
import { useEffect } from "react";
import Cookies from 'universal-cookie';
import { AdminHomeScreen } from "../pages/AdminScreens/AdminHomeScreen";
import { AdminTravelsScreen } from "../pages/AdminScreens/AdminTravelsScreen";
import { PaidTicketsScreen } from "../pages/StudentScreens/PaidTicketsScreen";

const cookies = new Cookies();
var usuario = cookies.get('usuario')

const PrivateRoutes = () => {

  useEffect(() => {
    if (!usuario) {
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
            <Route path="/" element={usuario.idTipo === 1 ? <StudentHomeScreen /> : <AdminHomeScreen />} />
            <Route path="/solicitudes" element={<RequestsScreen />} />
            <Route path="/tickets" element={<PaidTicketsScreen />} />
            <Route path="/formas" element={<PaymentMethodsScreen />} />
            <Route path="/horarios" element={<ScheduleScreen />} />
            <Route path="/administrar" element={<AdminTravelsScreen />} />
          </Routes>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default PrivateRoutes;
