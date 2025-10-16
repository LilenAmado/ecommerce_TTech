import { createContext, useState } from "react";

// eslint-disable-next-line
export const ProyectContext = createContext();

export const ProyectContextProvider = (props) => {
    const [cart, setCart] = useState([])
    const [isCartEmpty, setIsCartEmpty ] = useState(true)
    const [isHovered, setIsHovered] = useState(false);
    const value = { cart, setCart, isCartEmpty, setIsCartEmpty, isHovered, setIsHovered}

    return (
        <ProyectContext.Provider value={value} >
            {props.children}
        </ProyectContext.Provider>
    )
}