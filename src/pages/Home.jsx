import heroBg from "../assets/hero-bg.jpg";
import aboutImg from "../assets/john-doe-about.jpg";
import ModalGithub from "../components/MondalGithub";
import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {/* HERO : image plein écran avec titre */}
      <div
        className="hero d-flex flex-column justify-content-center align-items-center text-white text-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <h1>John Doe</h1>
        <h2>Développeur Web & Mobile</h2>
        <button
          className="btn btn-primary mt-4"
          onClick={() => setModalShow(true)}
        >
          En savoir plus
        </button>
      </div>

      {/* SECTION À PROPOS */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={aboutImg}
              alt="John Doe"
              className="img-fluid rounded about-img"
            />
          </div>
          <div className="col-md-6">
            <h3>À propos de moi</h3>
            <p>
              Passionné par le développement web, je conçois des sites modernes,
              accessibles et performants.
            </p>
            <div className="mb-3">
              <label>HTML</label>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  style={{ width: "90%" }}
                >
                  90%
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label>CSS</label>
              <div className="progress">
                <div className="progress-bar bg-info" style={{ width: "85%" }}>
                  85%
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label>React</label>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalGithub show={modalShow} onClose={() => setModalShow(false)} />
    </>
  );
}
