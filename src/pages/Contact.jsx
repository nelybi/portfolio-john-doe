export default function Contact() {
  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold">Me contacter</h2>
      <p className="text-center">Un projet ? Une question ? Écrivez-moi !</p>
      <div className="barre-bleue mx-auto my-3"></div>

      <div className="row">
        {/* Formulaire */}
        <div className="col-12 col-md-6 mb-4">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nom
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </form>
        </div>

        {/* Carte Google Maps */}
        <div className="col-12 col-md-6">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999055584588!2d2.292292615674954!3d48.858373079287504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd52d73bbf%3A0x8ef7ad1234567890!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1681917584180!5m2!1sfr!2sfr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
