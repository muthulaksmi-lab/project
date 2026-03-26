import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          ModernStore
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {['/', '/about', '/services', '/contact'].map((path, index) => {
              const labels = ['Home', 'About', 'Services', 'Contact'];
              return (
                <li className="nav-item" key={path}>
                  <NavLink className="nav-link" to={path}>
                    {labels[index]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="d-flex gap-2">
            {user ? (
              <>
                <span className="text-light align-self-center">Hi, {user.name}</span>
                <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-outline-light btn-sm" to="/login">
                  Login
                </Link>
                <Link className="btn btn-primary btn-sm" to="/register">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
