import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Slider from './Components/Slider/Slider';
import Categories from './Components/Categories/Categories';
import Justforyou from './Components/Justforyou/Justforyou';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Justforyou />
    </div>
  )
}

export default App
