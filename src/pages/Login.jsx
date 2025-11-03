import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import React from "react";

function Login() {
  const navigate = useNavigate();

  // función que redirige al Home
  const handleLogin = (e) => {
    e.preventDefault(); // evita que el formulario se recargue
    navigate("/Home");  // aquí defines a dónde debe ir
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Iniciar Sesión</h2>
        <p>Bienvenido de nuevo. Accede a tu cuenta.</p>

        <label>Email o Nombre de Usuario</label>
        <input type="text" placeholder="tu@ejemplo.com" />

        <label>Contraseña</label>
        <div className="password-field">
          <input type="password" placeholder="••••••••" />
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>

        <button type="submit">Iniciar Sesión</button>

        <p className="register-text">
          ¿No tienes una cuenta?{" "}
          <Link to="/registro">Regístrate</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
