//import { createContext, useState } from "react";

// export const ProyectContextProvider = (props) => {
//     const [ option, setOption ] = useState(null)
//     const value = { option, setOption }

//     return (
//         <ProyectContext.Provider value = {value} >
//             {props.children}
//         </ProyectContext.Provider>
//     )
// }


// export const ProyectContext = createContext(null);

///////////////////////////


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