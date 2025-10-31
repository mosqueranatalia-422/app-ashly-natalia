import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import React from "react";

function Login() {
  const navigate = useNavigate();

  const Login = () => {
    
    navigate("/dashboard");
  };

  return (
     <div className="login-container">
      <form className="login-box">
        <h2>Iniciar Sesión</h2>
        <p>Bienvenido de nuevo. Accede a tu cuenta.</p>

        <label>Email o Nombre de Usuario</label>
        <input type="text" placeholder="tu@ejemplo.com" />

        <label>Contraseña</label>
        <div className="password-field">
          <input type="password" placeholder="••••••••" />
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>

      <button onClick={()=> window.location.href="/Dashboard"}>Iniciar Sesión</button>

        <p className="register-text">
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </form>
    </div>
    
  );
}

export default Login;