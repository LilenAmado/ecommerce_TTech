import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProyectContext } from '../context/ProyectContext.jsx';
import Button from '../components/General/Button/Button';
import cancelar from '../assets/cruz.png'
import { handleUpdatedToCart } from '../utils/functions'
import './styles/Cart.css'

const Cart = () =>{
  const { cart, setCart, isCartEmpty, setIsCartEmpty, isHovered, setIsHovered} = useContext(ProyectContext);

  const textTitle = (title) => {
    if (!title) return ''; 
    return title.length > 10 ? title.slice(0, 15) + '...' : title;
  };

  const handleAddToCart = (productId, type) => handleUpdatedToCart (productId, type, cart, setCart, setIsCartEmpty)

  if(isCartEmpty === true){
    return(
      <> 
        { isHovered && 
          <div className='cart'>
            <div className='grid-cart'>
              <h2> Resumen de compra </h2>
              <img src={cancelar} className='img-cancelar' onClick={() => setIsHovered(!isHovered)}/>
            </div>
            <p> Tu carrito está vacío </p> 
          </div>
        }
      </>
    )
  } else if (isCartEmpty === false){
    return (
      <>
        { isHovered && 
          <div className='cart'>
            
            <div className='grid-cart'>
              <h2> Resumen de compra </h2>
              <img src={cancelar} className='img-cancelar' onClick={() => setIsHovered(!isHovered)}/>
            </div>
            
            {cart.map((item) => (
              <div className='cart-product'>
                <img src={item.image} alt="card" width={80} className='img-cart'/>
                <p className='title-cart'>{textTitle(item.title)}</p>
                <p className='price-cart'>${textTitle(item.price)}</p>
                <p className='quantity-cart'>{item.quantity}</p>
                <button className='btn-cart' onClick={() => handleAddToCart(item.id, 'add')} >+</button>
                <button className='btn-cart' onClick={() => handleAddToCart(item.id, 'subtract')} >-</button>
              </div>
            ))}
            <Link to={'shoppingCart'}>
              <Button text={"Ir al carrito"} />
            </Link>
          </div>
        }
      </>
    )
  }
}

export default Cart