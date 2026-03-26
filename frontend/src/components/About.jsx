const About = () => (
  <section className="py-5" id="about">
    <div className="container">
      <div className="row align-items-center g-4">
        <div className="col-lg-6">
          <img
            className="img-fluid rounded shadow-sm"
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200"
            alt="Office team"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="fw-bold">About ModernStore</h2>
          <p className="text-muted">
            We help businesses and freelancers build inspiring work environments with high-quality products.
            Our mission is to blend functionality with exceptional design.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
