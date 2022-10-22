import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "../pages/HomeScreen";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Paper } from "@mui/material";
import { Container } from "@mui/system";
import RequestsScreen from "../pages/RequestsScreen";

const PrivateRoutes = () => {
  return (
    <>
      <Header />
      <Container>
        <Paper
          elevation={2}
          style={{ padding: "40px", margin: "40px" }}
        >
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/solicitudes" element={<RequestsScreen />} />
          </Routes>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default PrivateRoutes;
