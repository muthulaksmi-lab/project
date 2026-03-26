import { useEffect, useState } from 'react';
import api from '../api/axios.js';
import LoadingSpinner from './LoadingSpinner.jsx';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get('/products');
        setProducts(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Could not load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="alert alert-danger my-4">{error}</div>;

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Featured Products</h2>
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-sm-6 col-lg-4" key={product._id}>
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <img src={product.image} className="card-img-top product-image" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-muted small">{product.description}</p>
                  <span className="badge bg-primary">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
