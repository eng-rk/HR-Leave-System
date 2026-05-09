import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import ApplyForm from "./Components/ApplyForm/ApplyForm";
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./pages/layout"

function App() {
  return (
   
 
  <Routes>

    <Route path="/" element={<Navigate to="/login" />} />

    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />

      <Route path="/layout" element={<Layout />} />
      <Route path="/form" element={<ApplyForm />} />

  </Routes>


    

   
      

  );
}


export default App;


