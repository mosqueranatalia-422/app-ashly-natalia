import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const Login = () => {
    
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <button onClick={()=> window.location.href="/Dashboard"}>Entrar</button>
      <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
    </div>
  );
}

export default Login;