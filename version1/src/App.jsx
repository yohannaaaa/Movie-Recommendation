import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Details from './Page/Details'
import poster from './assets/EC90BB58-EF5A-4D8C-AB28-87A69B387869.jpeg'
function App() {
  const sample = {Tittle: "tittle", year:"2023", time: "1h 43min", pg: 13,  Rating: 8.8, poster: poster , details: "Buried in the past lies a powerful truth that could change the future of the wizarding world. Albus Dumbledore, entrusted with a perilous mission, assembles a fearless team led by Newt Scamander, the brilliant magizoologist. Their odyssey takes them into the teeming heart of Gellert Grindelwald's dark army, where they must confront not only formidable foes but also long-held secrets that threaten to tear them apart. Love, loyalty, and the fate of the wizarding world itself hang in the balance in this epic adventure."}
  return (
    <>
      <Details move={sample}/>
    </>
  )
}

export default App
