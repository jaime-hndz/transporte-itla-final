import { Route, Routes } from "react-router-dom";
import { StudentHomeScreen } from "../pages/StudentScreens/StudentHomeScreen";
import { Footer } from "../components/Layout/Footer/Footer";
import { Header } from "../components/Layout/Header/Header";
import { Paper } from "@mui/material";
// import { Container } from "@mui/system";
import { RequestsScreen } from "../pages/StudentScreens/RequestsScreen";
import { PaymentMethodsScreen } from "../pages/InformationScreens/PaymentMethodsScreen";
import { ScheduleScreen } from "../pages/InformationScreens/ScheduleScreen";
import { useEffect } from "react";
import { AdminHomeScreen } from "../pages/AdminScreens/AdminHomeScreen";
import { AdminTravelsScreen } from "../pages/AdminScreens/AdminTravelsScreen";
import { PaidTicketsScreen } from "../pages/StudentScreens/PaidTicketsScreen";
import { BalanceScreen } from "../pages/StudentScreens/BalanceScreen";
import { usuario } from "../helpers/UserProvider";
import { RoutesMapScreen } from "../pages/InformationScreens/RoutesMapScreen";
import { AddTravelScreen } from "../pages/AdminScreens/AddTravelScreen";
import { ModifyTravelScreen } from "../pages/AdminScreens/ModifyTravelScreen";
import { CheckTravelsScreen } from "../pages/AdminScreens/CheckTravelsScreen";
import { Navigate } from "react-router-dom";
import { NotFoundScreen } from "../pages/NotFoundScreen";
import {AboutScreen} from "../pages/InformationScreens/AboutScreen";
import {HelpScreen} from "../pages/InformationScreens/HelpScreen";


const PrivateRoutes = () => {
  useEffect(() => {
    if (!usuario) {
      window.location.href = "./login";
    }
  }, []);

  return !usuario ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Header />
      <div className="allContainer">
        <div style={{ padding: "60px" }}>
          <div style={{ paddingInline: "24px" }}>
            <Paper elevation={2} style={{ padding: "40px" }}>
              <Routes>
                {usuario.idTipo === 2 ? (
                  <>
                    <Route path="/" element={<AdminHomeScreen />} />
                    <Route path="/administrar" element={<AdminTravelsScreen />} />
                    <Route path="/agregarviaje" element={<AddTravelScreen />} />
                    <Route path="/modificarviaje" element={<ModifyTravelScreen />} />
                    <Route path="/checkviaje" element={<CheckTravelsScreen />} />
                  </>
                ) : (
                  <>
                    <Route path="/" element={<StudentHomeScreen />} />
                    <Route path="/solicitudes" element={<RequestsScreen />} />
                    <Route path="/tickets" element={<PaidTicketsScreen />} />
                    <Route path="/formas" element={<PaymentMethodsScreen />} />
                    <Route path="/horarios" element={<ScheduleScreen />} />
                    <Route path="/saldo" element={<BalanceScreen />} />
                    <Route path="/rutas" element={<RoutesMapScreen />} />
                  </>
                )}
                <Route path="/acercade" element={<AboutScreen />} />
                <Route path="/ayuda" element={<HelpScreen />} />
                <Route path='*' element={<NotFoundScreen />} />
              </Routes>
            </Paper>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PrivateRoutes;
