// Footer — applied verbatim from Footer.astro, including the compliance disclaimer (DESIGN.md §8).
function Footer() {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="cols">
          <div><p className="col-title">Invierte</p><ul><li><a className="footer-link" href="#">Explorar inversiones</a></li></ul></div>
          <div><p className="col-title">Aprende</p><ul><li><a className="footer-link" href="#">Primeros pasos de inversión</a></li></ul></div>
          <div><p className="col-title">Ayuda y soporte</p><ul><li><a className="footer-link" href="#">Centro de ayuda</a></li></ul></div>
          <div><p className="col-title">Comunidad</p><ul><li><a className="footer-link" href="#">Comunidad</a></li></ul></div>
          <div>
            <p className="col-title">Síguenos</p>
            <ul>
              <li><a className="social-link" href="#">Facebook</a></li>
              <li><a className="social-link" href="#">Instagram</a></li>
              <li><a className="social-link" href="#">Youtube</a></li>
              <li><a className="social-link" href="#">Twitter</a></li>
              <li><a className="social-link" href="#">Linkedin</a></li>
            </ul>
          </div>
        </div>
        <div className="bottom-row">
          <img src="../../assets/logo/horizontal/070726_logo-capitalizarme-negro-sin-com.png" alt="Capitalizarme" />
          <div className="legal">
            <p>Todas las rentabilidades y retornos mostrados en la página son referenciales, los rendimientos pasados no garantizan retornos futuros.</p>
            <p>©Capitalizarme 2026 • Condiciones de uso • Políticas de privacidad</p>
            <p>Hendaya 60, OF. 901 Las Condes.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
