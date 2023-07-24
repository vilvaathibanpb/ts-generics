import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type User = {
  name: string;
  id: string
}

type Product = {
  name: string;
  id: string
}

// function customUseState<T>(initialState: T): [T, (value: T) => void] {
//   return [ initialState, () => {} ]
// }

function App() {
  const [user, setUser] = useState<User>({
    name: "vilva",
    id: "1"
  })

  const [product, setProduct] = useState<Product>({
    name: "bed",
    id: "2"
  })

  // setUser()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
