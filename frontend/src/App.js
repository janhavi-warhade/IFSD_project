import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function PrivateRoute({ children }) {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return token ? children : <Navigate to="/login" replace />;
}

function AuthRouter() {
  const navigate = useNavigate();
  const goDashboard = () => navigate("/", { replace: true });
  return (
    <Routes>
      <Route path="/login" element={<Login onSuccess={goDashboard} />} />
      <Route path="/signup" element={<Signup onSuccess={goDashboard} />} />
      <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthRouter />
    </BrowserRouter>
  );
}

export default App;
