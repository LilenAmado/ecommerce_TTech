import { createContext, useState } from "react";

// eslint-disable-next-line
export const ProyectContext = createContext();

export const ProyectContextProvider = (props) => {
    const [cart, setCart] = useState([])
    const [isCartEmpty, setIsCartEmpty ] = useState(true)
    const [isHovered, setIsHovered] = useState(false);
    const [activeSection, setActiveSection] = useState(undefined)
    const [searchProduct, setSearchProduct] = useState()

    const value = { cart, setCart, isCartEmpty, setIsCartEmpty, isHovered, setIsHovered, activeSection, setActiveSection, searchProduct, setSearchProduct }

    return (
        <ProyectContext.Provider value={value} >
            {props.children}
        </ProyectContext.Provider>
    )
}