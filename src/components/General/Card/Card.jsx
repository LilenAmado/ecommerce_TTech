import { useEffect, useState, useContext } from 'react';
import Button from '../Button/Button';
import Text from '../Text/Text';
import { ProyectContext } from '../../../context/ProyectContext.jsx';
import { addOrUpdateCart } from '../../../utils/functions';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ( { id, element, title, image, price, discountedPrice} ) => {
    const [typeCard, setTypeCard] = useState('');
    const { cart, setCart, setIsCartEmpty, setIsHovered} = useContext(ProyectContext);

    const textTitle = (title) => {
        if (!title) return ''; 
        return title.length > 25 ? title.slice(0, 20) + '...' : title;
    };

    const typeCardOption = (element) => {
        switch(element) {
            case 'category':
                setTypeCard('category');
                break
            case 'offer':
                setTypeCard('offer');
                break
            case 'popular':
                setTypeCard('popular');
                break
            case 'products':
                setTypeCard('products');
                break
            default:
                setTypeCard('');
                break
        }
    } 
    
    // const handleAddToCart = (product) => {
    //     const existItem = cart.find(item => item.id === product.id) 
    //     if (existItem === undefined){
    //         setCart([...cart, { ...product, quantity: 1 }]);
    //     } else {
    //         const quantity = cart.map(item => item.id === product.id
    //                 ? { ...item, quantity: item.quantity + 1}
    //                 : item
    //             );

    //         const price = quantity.map(item => item.id === product.id
    //             ? { ...item, price: item.quantity * item.price}
    //             : item
    //         );

    //         setCart(price);
    //     }
    //     setIsCartEmpty(false)
    //     setIsHovered(true)
    // };

    const handleAddToCart = (prod) => {
        addOrUpdateCart(prod, cart, setCart, setIsCartEmpty);
        setIsHovered(true);
      };

    useEffect(() => {
        typeCardOption(element)
    }, []) 
    

    if (typeCard === 'category') {
        return (
            
            <div className="card-category">
                <Link to={'products'}>
                    { image && <img src={image} alt="card" width={80} className='img-category'/> }
                    <Text element={'subtitle'} text={textTitle(title)} />
                </Link>
            </div>
            
        )
    } else if (typeCard === 'offer') {
        return (
            <div className="card-offer">
                { image && <img src={image} alt="card" width={80} className='img-offer'/> }
                <Text element={'subtitle'} text={textTitle(title)} />
                <div className='around-price'>
                    <p>${price}</p>
                    <p>${price - discountedPrice}</p>
                </div>
                <Button text={"Agregar 🛒"} onClick={() => handleAddToCart({ id, title, image, price})} />
            </div>
        )
    } else { // products
        return (            
            <div className="card-offer">
                <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
                    { image && <img src={image} alt="card" width={80} className='img-offer'/> }
                    <Text element={'subtitle'} text={textTitle(title)} />
                    <p>${price}</p>
                </Link>
                <Button text={"Agregar 🛒"} onClick={() => handleAddToCart({ id, title, image, price})} />
            </div>
        )
    }
}

export default Card