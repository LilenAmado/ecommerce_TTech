import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { ProyectContext } from '../../context/ProyectContext.jsx';
import { getResponse } from '../../controllers/Services';
import Button from '../General/Button/Button.jsx';
import { addOrUpdateCart } from '../../utils/functions';
import './Products.css';

const ProductDetail = () => {
  const { id: idParam } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cart, setCart, setIsCartEmpty, setIsHovered} = useContext(ProyectContext);

    

    const handleAddToCart = (prod) => {
        addOrUpdateCart(prod, cart, setCart, setIsCartEmpty);
        setIsHovered(true);
    };

    useEffect(() => {
        const fetchProduct = async () => {
        try {
            const data = await getResponse();
            const found = (data || []).find(p => String(p.id) === String(idParam));
            setProduct(found || null);
        } catch (error) {
            console.error('Error fetching product:', error);
        } finally {
            setLoading(false);
        }
        };
        fetchProduct();
    }, [idParam]);

    if (loading) return <p>Cargando...</p>;
    if (!product) return <p>Producto no encontrado.</p>;

    return (
        <div className="product-detail-container">
        <div>
            <img src={product.image} alt={product.title} width={300} className='img-product-detail'/>
        </div>
        <div className='product-detail-info'>
            <h2>{product.title}</h2>
            <p className="category">{product.category}</p>
            <p className="description">{product.description}</p>
            <p className="price">Precio: ${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
        </div>
        </div>
    );
};

export default ProductDetail;