export const getUsers = async () => {
    try {
        const res = await fetch(`https://6922462109df4a49232214c0.mockapi.io/users`);
        if(!res.ok){
            throw new Error('Error al obtener el usuario');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        <Error />
        throw console.error("Error fetching data:", error);
    }   
}

export const addUser = async (product) => {
    try {
        const res = await fetch(`https://6922462109df4a49232214c0.mockapi.io/users`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        
        if(!res.ok){
            throw new Error(`Error al agregar al usuario: ${res.status}`);
        }

        const data = await res.json();
        return data;
        
    } catch (error) {
        console.error("Error adding user:", error);
        throw error;
    }   
}