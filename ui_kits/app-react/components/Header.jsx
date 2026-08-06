// Header — applied from Header.astro (sticky, translucent, wordmark + nav links)
function Header() {
  return (
    <header className="app-header">
      <div className="container">
        <div className="header-left">
          <a href="#">
            <img src="../../assets/logo/horizontal/070726_logo-capitalizarme-negro-sin-com.png" alt="Capitalizarme" />
          </a>
          <nav>
            <ul>
              <li><a className="nav-link" href="#">Explorar propiedades</a></li>
              <li><a className="nav-link" href="#">Cómo funciona</a></li>
            </ul>
          </nav>
        </div>
        <a className="btn btn-primary btn-header-cta" href="#">Agenda tu reunión</a>
      </div>
    </header>
  );
}
window.Header = Header;
