import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import './App.css'

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Signin from './pages/signIn';
import Signout from './pages/signOut';
import Details from './Page/Details';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element = {<Home/>} />
        <Route path="/Fav" element = {<Favorites/>} />
        <Route path="/Signin" element = {<Signin/>} />
        <Route path="/Signout" element = {<Signout/>} />
        
      </Route>
    )
  )
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
