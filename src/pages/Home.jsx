import { Link } from "react-router-dom";
import React from "react";
import "./Home.css";

function Home() {
  return (
   <div className="home-container">
     
      <nav className="navbar">
        <div className="nav-left">Mi Aplicación</div>
        <div className="nav-right">
          <Link to="/login" className="nav-link">Iniciar Sesión</Link>
          <Link to="/registro" className="nav-button">Registrarse</Link>
        </div>
      </nav>

      <header className="hero">
        <h1>Bienvenido a Nuestra Plataforma</h1>
        <p>
          Un espacio diseñado para simplificar tus tareas y potenciar tu
          productividad. Empieza en segundos.
        </p>
        <Link to="/dashboard" className="hero-btn">
          Comenzar Ahora
        </Link>
      </header>

      <section className="features">
        <h2>Características Principales</h2>
        <p>
          Descubre cómo nuestra plataforma puede ayudarte a alcanzar tus
          objetivos de manera más eficiente.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Gestión Centralizada</h3>
            <p>
              Accede y administra todas tus herramientas y datos desde un único
              panel de control intuitivo.
            </p>
          </div>

          <div className="feature-card">
            <h3>Flujos de Trabajo Ágiles</h3>
            <p>
              Optimiza tus procesos y colabora con tu equipo en tiempo real para
              una mayor productividad.
            </p>
          </div>

          <div className="feature-card">
            <h3>Seguridad Confiable</h3>
            <p>
              Mantenemos tu información segura con protocolos de encriptación y
              protección de última generación.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">Términos de Servicio</a>
          <a href="#">Política de Privacidad</a>
          <a href="#">Contacto</a>
        </div>
        <p>© 2024 Mi Aplicación. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;