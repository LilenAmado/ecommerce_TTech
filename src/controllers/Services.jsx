// import Error from '../components/General/Error/Error'
// export const getResponse = async () => {
//     try {
//         const res = await fetch(`https://fakestoreapi.com/products/`);
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         <Error />
//         throw console.error("Error fetching data:", error);
//     }           
// };

export const getProducts = async () => {
    try {
        const res = await fetch(`https://6922462109df4a49232214c0.mockapi.io/products`);
        if(!res.ok){
            throw new Error('Error al obtener los productos');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        <Error />
        throw console.error("Error fetching data:", error);
    }   
}

export const addProducts = async (product) => {
    try {
        const res = await fetch(`https://6922462109df4a49232214c0.mockapi.io/products`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        
        if(!res.ok){
            throw new Error(`Error al agregar el producto: ${res.status}`);
        }

        const data = await res.json();
        return data;
        
    } catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }   
}

export const updateProducts = async (id, product) => {
  try {
    const res = await fetch(`https://6922462109df4a49232214c0.mockapi.io/products/${encodeURIComponent(id)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });

    if (!res.ok) throw new Error(`Error al actualizar el producto: ${res.status}`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

export const deleteProducts = async (id) => {
  try {
    const res = await fetch(`https://6922462109df4a49232214c0.mockapi.io/products/${encodeURIComponent(id)}`, {
      method: 'DELETE'
    });

    if (!res.ok) throw new Error(`Error al eliminar el producto: ${res.status}`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};