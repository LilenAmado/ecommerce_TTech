import { Link } from 'react-router-dom';
import { useContext } from 'react';
import shoppingCart from '../../../assets/shopping-cart.png'
import { ProyectContext } from '../../../context/ProyectContext.jsx';
import search from '../../../assets/search.png'
import './Header.css'

const Header = () =>{
  const { isHovered, setIsHovered } = useContext(ProyectContext);

  return (
    <header>
      <li className='logo-container'>
        <Link to={'/'}> <h1 className='logo'>ÁGO<p>RA</p></h1> </Link>
      </li>
      <div className='search-container'>
        <input type="search" /> 
        <div>
          <img src={search} className='img-search'/>
        </div>
      </div>
      <nav>
        <ul>
          <li> <Link to={'products'}>Productos</Link> </li>
          <li> <Link to={'contact'}>Contacto</Link> </li>
          <li> <Link to={'help'}>Ayuda</Link> </li>
          <li onClick={() => setIsHovered(!isHovered)} >
            <Link>
              <img src={shoppingCart} className='shopping-cart'/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header