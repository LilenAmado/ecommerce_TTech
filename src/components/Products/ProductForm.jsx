import Text from "../General/Text/Text";
import './Products.css'

const ProductForm = (props) => {
    const {element} = props;

    const productForm = (type, text) => {
        return (
            <form action="">
                
                <Text element={'subtitle'} text={text} />
                
                <label>Nombre:</label>
                <input type="text" name="name" />
                
                <label>Precio:</label>
                <input type="number" name="price" min={0} step='any' />
                
                <label>Imagen (URL):</label>
                <input type="text" name="image" />

                <label> Descripción </label>
                <textarea name="description" rows="4"></textarea>
                
                <button 
                    // type="submit" 
                    className="btn-submit-product-form"
                >
                    {text}
                </button>
                
            </form>
        )
    }

    if(element){
        switch(element) {
            case 'add':
                return (
                    productForm(element, 'Agregar producto')
                )
            case 'edit':
                return (
                    productForm(element, 'Modificar producto')
                )
            case 'delete':
                return (
                    productForm(element, 'Eliminar producto')
                )
            default:
                return 'Producto';
        }
    }


    
};

export default ProductForm;