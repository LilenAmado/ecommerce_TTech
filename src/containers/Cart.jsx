import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProyectContext } from '../context/ProyectContext';
import Button from '../components/General/Button/Button';
import { handleUpdatedToCart } from '../utils/functions'
import './styles/Cart.css'

const Cart = () =>{
  const { cart, setCart, isCartEmpty, setIsCartEmpty, isHovered} = useContext(ProyectContext);

  const textTitle = (title) => {
    if (!title) return ''; 
    return title.length > 10 ? title.slice(0, 15) + '...' : title;
  };

  const handleAddToCart = (productId, type) => handleUpdatedToCart (productId, type, cart, setCart, setIsCartEmpty)
  
  // const handleAddToCart = (productId, type) => {
  //   const updatedCart = cart.map(item => {
  //     if (item.id === productId) {
  //       if (type === 'add') {
  //         return { ...item, quantity: item.quantity + 1 };
  //       } else if (type === 'subtract') {
  //         return { ...item, quantity: item.quantity - 1 };
  //       }
  //     }
  //     return item;
  //   });

  //   // Se filtra si el array queda en cero
  //   const filteredCart = updatedCart.filter(item => item.quantity > 0);
  //   setCart(filteredCart);

  //   if(filteredCart.length === 0) {
  //     setIsCartEmpty(true)
  //   }else{
  //     setIsCartEmpty(false)
  //   }
  // };

  if(isCartEmpty === true){
    return(
      <> 
        { isHovered && 
          <div className='cart'>
            <h2> Resumen de compra </h2>
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
            <h2 className='mb20'> Resumen de compra </h2>
            
            {cart.map((item) => (
              <div className='cart-product'>
                <img src={item.image} alt="card" width={80} className='img-cart'/>
                <p className='title-cart'>{textTitle(item.title)}</p>
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