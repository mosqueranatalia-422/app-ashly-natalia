import { Link } from "react-router-dom";

function Registro() {
  return (
    <div>
      <h1>Registro</h1>
      <input type="text" placeholder="Nombre" />
      <input type="email" placeholder="Correo" />
      <input type="password" placeholder="Contraseña" />
      <button onClick={()=>window.location.href="/Login"}>Registrarse</button>
      <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
    </div>
  );
}

export default Registro;