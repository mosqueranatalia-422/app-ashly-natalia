import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bienvenido a la Home</h1>
      <p>Selecciona una opción:</p>
      <Link to="/login">Ir a Login</Link>
      <br />
      <Link to="/register">Ir a Registro</Link>
    </div>
  );
}

export default Home;