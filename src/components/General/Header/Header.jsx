import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import shoppingCart from '../../../assets/shopping-cart.png'
import userIcon from '../../../assets/user.png'
import { ProyectContext } from '../../../context/ProyectContext.jsx';
import './Header.css'
import { useAuthContext } from '../../../context/AuthContext.jsx';

const Header = () =>{
  const { isHovered, setIsHovered, activeSection} = useContext(ProyectContext);
  const { user } = useAuthContext();
  const [open, setOpen] = useState(false);

  return (
    <header>

      {/* BOTÓN HAMBURGUESA */}
      <button className="hamburger" onClick={() => setOpen(!open)}>
        <span className={open ? "line open" : "line"}></span>
        <span className={open ? "line open" : "line"}></span>
        <span className={open ? "line open" : "line"}></span>
      </button>

      <li className='logo-container'>
        <Link to={'/'}> <h1 className='logo'>ÁGO<p>RA</p></h1> </Link>
      </li>

      <div className='search-container'>
        <input type="search" />
      </div>

      {/* NAV — AHORA TIENE className open */}
      <nav className={open ? "open" : ""}>
        <ul>
          <li> 
            <Link 
              to={'products'} 
              className={activeSection === 'products' ? 'active-link' : ''}
            > Productos </Link> 
          </li>

          <li> 
            <Link 
              to={'contact'}
              className={activeSection === 'contact' ? 'active-link' : ''}
            > Contacto</Link> 
          </li>

          <li> 
            <Link 
              to={'help'}
              className={activeSection === 'help' ? 'active-link' : ''}
            > Ayuda</Link> 
          </li>

          {/* <li onClick={() => setIsHovered(!isHovered)} >
            <Link>
              <img src={shoppingCart} className='shopping-cart'/>
            </Link>
          </li>

          <li>
            <Link to={user ? `/${user}` : '/login'}>
              <img src={userIcon} className='shopping-cart'/>
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className={`icons-container hamburguericons`}>
         <li onClick={() => setIsHovered(!isHovered)} >
            <Link>
              <img src={shoppingCart} className='shopping-cart'/>
            </Link>
          </li>

          <li>
            <Link to={user ? `/${user}` : '/login'}>
              <img src={userIcon} className='shopping-cart'/>
            </Link>
          </li>
      </div>
    </header>
  )
}

export default Header;
