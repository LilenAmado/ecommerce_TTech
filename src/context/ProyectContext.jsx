import { createContext, useState } from "react";

// eslint-disable-next-line
export const ProyectContext = createContext();

export const ProyectContextProvider = (props) => {
    const [cart, setCart] = useState([])
    const [isCartEmpty, setIsCartEmpty ] = useState(true)
    const [isHovered, setIsHovered] = useState(false);
    const [activeSection, setActiveSection] = useState(undefined)

    const value = { cart, setCart, isCartEmpty, setIsCartEmpty, isHovered, setIsHovered, activeSection, setActiveSection}

    return (
        <ProyectContext.Provider value={value} >
            {props.children}
        </ProyectContext.Provider>
    )
}