import React, { useEffect, useState, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import { ListItem } from './components/ListItem'
import { List } from './components/List'
import { Details } from './components/Details'
import { AppProvider } from './components/context'

export interface IUser {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface IAppContext {
  users: IUser[]
  setUsers: (users: any) => void
}

export function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        console.log('json :', json)
        setUsers(json)
      })
  }, [])
  console.log('users', users)

  return (
    <AppProvider users={users} setUsers={setUsers}>
      <div className="App">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/user/:id" element={<Details />} />
        </Routes>
      </div>
    </AppProvider>
  )
}
