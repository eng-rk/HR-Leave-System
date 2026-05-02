import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import ApplyForm from "./Components/ApplyForm/ApplyForm";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" /> } />
      <Route path="/form" element={<ApplyForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}


export default App;


