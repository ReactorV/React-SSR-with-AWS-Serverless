import { createContext } from 'react'

// eslint-disable-next-line import/no-cycle
import { IUser } from '@/App'

interface IAppContext {
  users: IUser[]
  setUsers: (users: any) => void
  children?: any
}

const initContext: IAppContext = {
  users: [],
  setUsers: (users: any) => {},
}

export const AppContext = createContext(initContext)

export const AppProvider = ({ children, users, setUsers }: IAppContext) => (
  <AppContext.Provider value={{ users, setUsers }}>{children}</AppContext.Provider>
)
