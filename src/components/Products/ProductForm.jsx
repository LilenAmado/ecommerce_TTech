import { useState, useEffect, useContext } from "react";
import Text from "../General/Text/Text";
import { getProducts, addProducts, updateProducts, deleteProducts } from '../../controllers/Services';
import { ProyectContext } from '../../context/ProyectContext.jsx';
import './Products.css';

const ProductForm = (props) => {
    const { action, data, setData } = props;
    const { searchProduct, setSearchProduct } = useContext(ProyectContext);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        img: '',
        description: ''
    });

    const [originalProduct, setOriginalProduct] = useState(null);

    const getApiResponse = async () => {
        try {
            const response = await getProducts();
            setData(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (!searchProduct || !data) return;

        const selected = (data || []).find(
            p => String(p.id) === String(searchProduct)
        );

        if (selected) {
            setOriginalProduct(selected);

            setFormData({
                name: selected.name ?? '',
                price: selected.price ?? '',
                category: selected.category ?? '',
                img: selected.img ?? '',
                description: selected.description ?? ''
            });
        }
    }, [searchProduct, data]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOperation = (type, e) => {
        e.preventDefault();
        switch (type) {
            case 'add':
                addProduct(e);
                break;
            case 'edit':
                updateProduct(e);
                break;
            case 'delete':
                removeProduct(e);
                break;
            default:
                break;
        }
    };

    // VALIDACIÓN
    const validateRequiredFields = () => {
        if (!formData.name.trim()) return "El nombre es obligatorio";
        if (!formData.price || Number(formData.price) <= 0) return "El precio debe ser mayor a 0";
        if (!formData.category.trim()) return "La categoría es obligatoria";
        if (!formData.img.trim()) return "La URL de imagen es obligatoria";
        return null;
    };


    // AGREGAR PRODUCTO
    const addProduct = async (e) => {
        e.preventDefault();

        const validationError = validateRequiredFields();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        setError(null);

        const newProduct = {
            name: formData.name || '',
            price: Number(formData.price) || 0,
            category: formData.category || '',
            description: formData.description || '',
            img: formData.img || ''
        };

        try {
            const saved = await addProducts(newProduct);

            setData(prev => [...prev, saved]);

            setFormData({
                name: '',
                price: '',
                category: '',
                description: '',
                img: ''
            });

            alert('Producto agregado correctamente');
            getApiResponse();

        } catch (error) {
            setError(error.message);
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    // MODIFICAR PRODUCTO
    const updateProduct = async (e) => {
        e.preventDefault();

        const validationError = validateRequiredFields();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const updatedData = {
                name: formData.name || originalProduct.name,
                price: formData.price ? Number(formData.price) : originalProduct.price,
                category: formData.category || originalProduct.category,
                description: formData.description || originalProduct.description,
                img: formData.img || originalProduct.img
            };

            const id = searchProduct;

            await updateProducts(id, updatedData);

            setData(prev =>
                prev.map(p => p.id === Number(id) ? { ...p, ...updatedData } : p)
            );

            setSearchProduct('');
            setFormData({
                name: '',
                price: '',
                category: '',
                description: '',
                img: ''
            });
            alert('Producto modificado correctamente');
            getApiResponse();

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // ELIMINAR PRODUCTO
    const removeProduct = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const id = searchProduct;

            await deleteProducts(id);

            setData(prev => prev.filter(p => p.id !== Number(id)));

            setSearchProduct('');
            setFormData({
                name: '',
                price: '',
                category: '',
                description: '',
                img: ''
            });
            alert('Producto eliminado correctamente');
            getApiResponse();

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const productForm = (type, text) => {
        return (
            <form onSubmit={(e) => handleOperation(type, e)}>

                <Text element={'subtitle'} text={text} />

                {(type === 'edit' || type === 'delete') &&
                    <>
                        <label>Buscar producto:</label>
                        <select
                            value={searchProduct}
                            onChange={e => setSearchProduct(e.target.value)}
                        >
                            {/* <option value="" disabled> Seleccionar producto </option> */}


                            {(data || []).map(product => (
                                <option key={product.id} value={product.id}>
                                    {product.name ?? product.title ?? `Producto ${product.id}`}
                                </option>
                            ))}

                            
                        </select>
                    </>
                }

                {(type !== 'delete') &&
                    <>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={originalProduct?.name || 'Nombre del producto'}
                        />

                        <label>Precio:</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            min={0}
                            step="any"
                            placeholder={originalProduct?.price || '0'}
                        />

                        <label>Imagen (URL):</label>
                        <input
                            type="text"
                            name="img"
                            value={formData.img}
                            onChange={handleInputChange}
                            placeholder={originalProduct?.img || 'URL de imagen'}
                        />

                        <label>Categoría:</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            placeholder={originalProduct?.category || 'Categoría'}
                        />

                        <label>Descripción</label>
                        <textarea
                            name="description"
                            rows="4"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder={originalProduct?.description || 'Descripción del producto'}
                        ></textarea>
                    </>
                }

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button
                    type="submit"
                    className="btn-submit-product-form"
                    disabled={loading}
                >
                    {loading ? 'Procesando...' : text}
                </button>

            </form>
        );
    };

    if (action) {
        switch (action) {
            case 'add':
                return productForm(action, 'Agregar producto');
            case 'edit':
                return productForm(action, 'Modificar producto');
            case 'delete':
                return productForm(action, 'Eliminar producto');
            default:
                return 'Producto';
        }
    }
};

export default ProductForm;
