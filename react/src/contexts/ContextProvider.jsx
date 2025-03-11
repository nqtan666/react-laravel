import { createContext, useContext, useState } from 'react';

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'John Doe',
    });
    const [token, _setToken] = useState(123);
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    };
    return (
        <StateContext.Provider
            value={{
                user,
                setToken,
                setUser,
                token,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useGlobalContext = () => useContext(StateContext);
