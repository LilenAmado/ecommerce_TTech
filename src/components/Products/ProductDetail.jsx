import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getResponse } from '../../controllers/Services';
//import { handleUpdatedToCart } from '../../utils/functions'
import './Products.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  //handleUpdatedToCart (product.productId, product.type, product.cart, product.setCart, product.setIsCartEmpty)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getResponse();
        const found = (data || []).find(p => String(p.id) === String(id));
        setProduct(found || null);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

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
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductDetail;