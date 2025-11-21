import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username) => {
        // Simulando la creación de un token (en una app real, esto sería generado por un servidor)
        const token = `fake-token-${username}`;
        localStorage.setItem('authToken', token);
        setUser(username);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
    };

    const value = { user, login, logout }

    return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider> 
    );
}
// eslint-disable-next-line
export const useAuthContext = () => useContext(AuthContext);