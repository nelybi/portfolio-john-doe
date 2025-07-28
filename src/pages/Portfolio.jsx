import "./Portfolio.css";

export default function Portfolio() {
  const projects = [
    { title: "Application React de recettes" },
    { title: "Landing Page responsive" },
    { title: "Site vitrine pour freelance" },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold">Mon Portfolio</h2>
      <p className="text-center">Quelques projets réalisés</p>
      <div className="barre-bleue mx-auto my-3"></div>

      <div className="row">
        {projects.map((project, index) => (
          <div className="col-12 col-md-4 mb-4" key={index}>
            <div className="card h-100 text-center shadow-sm p-4">
              <h5 className="card-title">{project.title}</h5>
              <button className="btn btn-outline-primary mt-3">Voir +</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
