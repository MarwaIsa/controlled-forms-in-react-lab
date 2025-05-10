import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Bookshelf from './components/Bookshelf/Bookshelf';

function App() {
  return (
    <div>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </div>
  );
}

export default App;
