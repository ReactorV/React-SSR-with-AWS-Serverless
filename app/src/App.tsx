import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { ListItem } from './components/ListItem';
import { List } from './components/List';
import { Details } from './components/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/user/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
