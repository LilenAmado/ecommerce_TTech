import { useContext } from 'react';
import { ProyectContext } from '../context/ProyectContext.jsx';
import { Link } from 'react-router-dom';
import Button from '../components/General/Button/Button';
import Text from '../components/General/Text/Text';
import { handleUpdatedToCart } from '../utils/functions'
import './styles/ShoppingCart.css'

const ShoppingCart = () =>{
  const { cart, setCart, isCartEmpty, setIsCartEmpty } = useContext(ProyectContext);

  const handleAddToCart = (productId, type) => handleUpdatedToCart (productId, type, cart, setCart, setIsCartEmpty)
   
  const total = (cart || []).reduce((acc, item) => {
    const qty = item.quantity ?? 0;
    const unit = item.unitPrice ?? (qty ? item.price / qty : item.price ?? 0);
    return acc + unit * qty;
  }, 0);


  return (
    <>
      <div className='shoppingCart-container'>
        <Text element={'title'} text={'Carrito de Compras'} />
      </div>

      {isCartEmpty && 
        <div>
          <div className='shoppingCart-container'>
            <p className='title-cart title-empty-cart'>Tu carrito está vacío</p>
          </div>

          <div className='shoppingCart-button-empty-cart'>
            <hr />
            <Link to={'/products'}>
              <Button text={"Productos"} />
            </Link>
          </div>
        </div>
      }

      {!isCartEmpty && 
        <div>
          {cart.map((item) => (
            <div className='cart-product shoppingCart-container'>
              <img src={item.image} alt="card" width={80} className='img-cart'/>
              <p className='title-cart'>{item.title}</p>
              <p className='price-cart'>${item.price}</p>
              <p className='quantity-cart'>{item.quantity}</p>
              <button className='btn-cart' onClick={() => handleAddToCart(item.id, 'add') }>+</button>
              <button className='btn-cart' onClick={() => handleAddToCart(item.id, 'subtract') }>-</button>
            </div>
          ))}
          <div className='shoppingCart-button'>
            
            <div className='grid-cart'>
              <p className='price-cart'> Total: </p>
              <p className='price-cart'> ${total}</p>
            </div>
            
            <Link>
              <Button text={"Comprar"} />
            </Link>
          </div>
        </div>
      }
    </>
  )
}

export default ShoppingCart