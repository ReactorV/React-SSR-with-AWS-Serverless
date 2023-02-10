import { createContext, useState, useEffect, Dispatch, SetStateAction } from 'react';

export const AppContext = createContext({ users: [], setUsers: (users: any) => {} })

// @ts-ignore
export const AppProvider = ({ children, users, setUsers }) => {

    return (
        <AppContext.Provider value={{ ...users, setUsers }}>{children}</AppContext.Provider>
    )
}
