const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="cookieLOGO.png" alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="Inicio">Inicio</a>
          </li>
          <li>
            <a href="Productos">Productos</a>
          </li>
          <li>
            <a href="Nosotros">Nosotros</a>
          </li>
          <li>
            <a href="Contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
