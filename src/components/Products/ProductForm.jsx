import { useState } from "react";
import Text from "../General/Text/Text";
import { addProducts, updateProducts, deleteProducts } from '../../controllers/Services';
import './Products.css'

const ProductForm = (props) => {
    const {action} = props;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        img: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOperation = (type) => {
        switch(type) {
            case 'add':
                addProduct();
                break;
            case 'edit':
                updateProduct();
                break;
            case 'delete':
                removeProduct();
                break;
            default:
                break;
        }
    }

    const addProduct = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const newProduct = {
            name: formData.name,
            price: Number(formData.price),
            category: formData.category,
            description: formData.description,
            img: formData.img
        };

        try{
            await addProducts(newProduct);
            
            // Limpiar formulario
            setFormData({
                name: '',
                price: '',
                category: '',
                description: '',
                img: ''
            });
        } catch (error) {
            setError(error.message);
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    }

    const updateProduct = async (e, id, formData) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await updateProducts(id, formData);
        } catch (err) {
            setError(error.message);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const removeProduct = async (e, id) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await deleteProducts(id);
        } catch (err) {
            console.error(err);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const productForm = (type, text) => {
        return (
            <form onSubmit={handleOperation(type)}>
                
                <Text element={'subtitle'} text={text} />
                
                { (type === 'edit' || type === 'delete') &&
                    <>
                        <label>Buscador:</label>
                        {/* <input 
                            type="search" 
                            name="name" 
                            value={formData.search}
                            onChange={handleInputChange}
                        /> */}

                        <select 
                            // value={selectedId} onChange={e => setSelectedId(e.target.value)}
                        >
                            <option value=""> Seleccionar producto </option>
                            {/* {products.map(p => (
                                <option key={p.id} value={p.id}>
                                    {p.name ?? p.title ?? `Producto ${p.id}`}
                                </option>
                            ))} */}
                        </select>

                    </>
                }
                { (type !== 'delete') &&
                    <>
                        <label>Nombre:</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        
                        <label>Precio:</label>
                        <input 
                            type="number" 
                            name="price" 
                            value={formData.price}
                            onChange={handleInputChange}
                            min={0} 
                            step='any' 
                        />
                        
                        <label>Imagen (URL):</label>
                        <input 
                            type="text" 
                            name="img" 
                            value={formData.img}
                            onChange={handleInputChange}
                        />

                        <label>Categoría:</label>
                        <input 
                            type="text" 
                            name="category" 
                            value={formData.category}
                            onChange={handleInputChange}
                        />

                        <label> Descripción </label>
                        <textarea 
                            name="description" 
                            rows="4"
                            value={formData.description}
                            onChange={handleInputChange}
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
        )
    }
    
    if(action){
        switch(action) {
            case 'add':
                return (
                    productForm(action, 'Agregar producto')
                )
            case 'edit':
                return (
                    productForm(action, 'Modificar producto')
                )
            case 'delete':
                return (
                    productForm(action, 'Eliminar producto')
                )
            default:
                return 'Producto';
        }
    }    
};

export default ProductForm;