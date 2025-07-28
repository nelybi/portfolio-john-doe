import { Helmet } from "react-helmet";

export default function Mentions() {
  return (
    <section className="container my-5">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>

      <h2 className="text-center fw-bold">Mentions légales</h2>
      <p className="text-center">Informations légales du site</p>
      <div className="barre-bleue mx-auto my-3"></div>

      <div className="accordion" id="accordionMentions">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionMentions"
          >
            <div className="accordion-body">
              John Doe - Développeur Web <br />
              123 Rue du Code, 75000 Paris
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Propriété intellectuelle
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionMentions"
          >
            <div className="accordion-body">
              Tous les contenus de ce site sont protégés par le droit d’auteur.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Données personnelles
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionMentions"
          >
            <div className="accordion-body">
              Aucune donnée personnelle n’est collectée sans votre accord.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
