import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import shoppingCart from '../../../assets/shopping-cart.png';
import userIcon from '../../../assets/user.png';
import searchIcon from '../../../assets/search.png';
import cruz from '../../../assets/cruz.png';

import { ProyectContext } from '../../../context/ProyectContext.jsx';
import { useAuthContext } from '../../../context/AuthContext.jsx';

import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    isHovered,
    setIsHovered,
    activeSection,
    searchQuery,
    setSearchQuery,
    openSearch,
    setOpenSearch,
  } = useContext(ProyectContext);

  const { user } = useAuthContext();
  const [openMenu, setOpenMenu] = useState(false);

  /* ----------------------------------
     Cerrar búsqueda al salir de /products
  ---------------------------------- */
  useEffect(() => {
    if (location.pathname !== '/products') {
      setOpenSearch(false);
      setSearchQuery('');
    }
  }, [location.pathname, setOpenSearch, setSearchQuery]);

  /* ----------------------------------
     Click en la lupa
  ---------------------------------- */
  const handleSearchToggle = () => {
    if (location.pathname !== '/products') {
      navigate('/products');
      setOpenSearch(true);
      return;
    }

    setOpenSearch((prev) => !prev);

    if (openSearch) {
      setSearchQuery('');
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="header-container">
      <header>
        {/* BOTÓN HAMBURGUESA */}
        <button className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
          <span className={openMenu ? 'line open' : 'line'} />
          <span className={openMenu ? 'line open' : 'line'} />
          <span className={openMenu ? 'line open' : 'line'} />
        </button>

        {/* LOGO */}
        <li className="logo-container">
          <Link to="/">
            <h1 className="logo">
              ÁGO<p>RA</p>
            </h1>
          </Link>
        </li>

        {/* NAV */}
        <div className="nav-container">
          <nav className={openMenu ? 'open' : ''}>
            <ul>
              <li>
                <Link
                  to="/products"
                  className={activeSection === 'products' ? 'active-link' : ''}
                >
                  Productos
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className={activeSection === 'contact' ? 'active-link' : ''}
                >
                  Contacto
                </Link>
              </li>

              <li>
                <Link
                  to="/help"
                  className={activeSection === 'help' ? 'active-link' : ''}
                >
                  Ayuda
                </Link>
              </li>
            </ul>
          </nav>

          {/* ICONOS */}
          <div className="icons-container hamburguericons">
            <li onClick={() => setIsHovered(!isHovered)}>
              <img src={shoppingCart} className="shopping-cart" />
            </li>

            <li>
              <Link to={user ? `/${user}` : '/login'}>
                <img src={userIcon} className="shopping-cart" />
              </Link>
            </li>

            <li>
              <img
                src={searchIcon}
                alt="search"
                className="search-icon"
                onClick={handleSearchToggle}
              />
            </li>
          </div>
        </div>
      </header>

      {/* SEARCH BAR — SOLO EN /products */}
      {location.pathname === '/products' && openSearch && (
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Busca tus productos"
            style={{paddingLeft: '10px'}}
          />
          <button onClick={handleSearchToggle}>
            <img src={cruz} alt="cerrar" className="search-icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
