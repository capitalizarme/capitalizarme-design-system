// SimulatorBanner — applied from Hero.astro + ContactForm.astro copy ("Averigua tu capacidad de inversión")
function SimulatorBanner() {
  return (
    <section className="container section simulator-banner">
      <div className="row">
        <div className="copy">
          <h1>Averigua tu capacidad de inversión</h1>
          <p>
            Descubre hasta qué monto puedes invertir acorde a tu situación financiera y para qué
            propiedades te alcanza — sin compromiso.
          </p>
          <a className="btn btn-primary" href="#">Agenda tu reunión</a>
        </div>
        <img src="../../assets/mascot/capi-searching.png" alt="Capi buscando propiedades" />
      </div>
    </section>
  );
}
window.SimulatorBanner = SimulatorBanner;
