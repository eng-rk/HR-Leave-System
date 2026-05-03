import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import ApplyForm from "./Components/ApplyForm/ApplyForm";
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./pages/layout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" /> } />
      <Route path="/form" element={<ApplyForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
        <Route path="/Layout" element={<Layout />} />
    </Routes>
  );
}


export default App;


