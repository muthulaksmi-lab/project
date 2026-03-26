const services = [
  { title: 'Fast Delivery', text: 'Reliable shipping for all professional products.' },
  { title: 'Expert Curation', text: 'Only premium and trusted items in our catalog.' },
  { title: 'Support 24/7', text: 'Our team is available around the clock for help.' }
];

const Services = () => (
  <section className="py-5 bg-light" id="services">
    <div className="container">
      <h2 className="text-center fw-bold mb-4">Our Services</h2>
      <div className="row g-4">
        {services.map((service) => (
          <div className="col-md-4" key={service.title}>
            <div className="card h-100 border-0 shadow-sm hover-lift">
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">{service.title}</h5>
                <p className="card-text text-muted">{service.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
