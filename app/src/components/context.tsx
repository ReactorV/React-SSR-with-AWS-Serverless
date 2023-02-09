import { createContext, useState } from 'react';

export const AppContext = createContext({});

// @ts-ignore
export const AppProvider = ({ children, initData }) => {
    const [state, setState] = useState(initData);

    return (
        <AppContext.Provider value={{ ...state, setState }}>{children}</AppContext.Provider>
    )
}
