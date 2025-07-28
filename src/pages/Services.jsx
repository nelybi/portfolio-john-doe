import "./Services.css";
import { FaPaintBrush, FaCode, FaSearch } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaPaintBrush />,
      title: "UX Design",
      description:
        "Maquettage, wireframes et conception d’interfaces utilisateurs modernes et intuitives.",
    },
    {
      icon: <FaCode />,
      title: "Développement Web",
      description:
        "Intégration de sites en HTML, CSS, JavaScript et React. Responsive et performant.",
    },
    {
      icon: <FaSearch />,
      title: "Référencement (SEO)",
      description:
        "Optimisation technique et sémantique du site pour le positionnement Google.",
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold">Mon offre de services</h2>
      <p className="text-center">
        Voici les prestations sur lesquelles je peux intervenir
      </p>
      <div className="barre-bleue mx-auto my-3"></div>

      <div className="row">
        {services.map((service, index) => (
          <div className="col-12 col-md-4 mb-4" key={index}>
            <div className="card text-center p-4 service-card h-100 shadow-sm">
              <div className="icon-service text-primary mb-3 fs-2">
                {service.icon}
              </div>
              <h3 className="fs-5 fw-bold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
