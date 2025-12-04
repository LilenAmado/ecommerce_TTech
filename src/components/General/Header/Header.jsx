import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import shoppingCart from '../../../assets/shopping-cart.png'
import userIcon from '../../../assets/user.png'
import searchIcon from '../../../assets/search.png'
import cruz from '../../../assets/cruz.png'
import { ProyectContext } from '../../../context/ProyectContext.jsx';
import { useAuthContext } from '../../../context/AuthContext.jsx';
import './Header.css'


const Header = () =>{
  const { isHovered, setIsHovered, activeSection} = useContext(ProyectContext);
  const { user } = useAuthContext();
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const handleCloseSearch = () => {
    console.log("Cerrando search");
    
    if(openSearch){
      setOpenSearch(false);
      document.querySelector('.search-container').style.display = 'none';
    } else {
      setOpenSearch(true);
      document.querySelector('.search-container').style.display = 'flex';
    }
  }

  return (
    <div className='header-container'>
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

        {/* NAV — AHORA TIENE className open */}
        <div className='nav-container'>
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
              <li>
                
                <img src={searchIcon} alt="search-icon" className='search-icon' onClick={handleCloseSearch} />
              
              </li>
          </div>
        </div>
      </header>

      { openSearch &&
        <div className='search-container'>
          <input type="search" />
          <button onClick={handleCloseSearch}> <img src={cruz} alt="search-icon" className='search-icon'/> </button>
        </div>
      }
    </div>
  )
}

export default Header;
