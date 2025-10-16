import Error from '../components/General/Error/Error'
export const getResponse = async () => {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/`);
        const data = await res.json();
        return data;
    } catch (error) {
        <Error />
        throw console.error("Error fetching data:", error);
    }           
};