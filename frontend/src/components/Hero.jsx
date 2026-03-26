import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="hero-section text-white d-flex align-items-center">
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-7 fade-in-up">
          <h1 className="display-5 fw-bold mb-3">Elevate Your Workspace with Premium Products</h1>
          <p className="lead mb-4">
            Discover curated furniture, electronics, and accessories designed for modern professionals.
          </p>
          <Link to="/services" className="btn btn-primary btn-lg me-2 hover-lift">
            Explore Services
          </Link>
          <Link to="/contact" className="btn btn-outline-light btn-lg hover-lift">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
