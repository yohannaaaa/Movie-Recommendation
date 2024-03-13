import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import './App.css'

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import SignOut from './pages/Signout';
import Signin from './pages/Signin';
import Details from './pages/Details';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element = {<Home/>} />
        <Route path="/Fav" element = {<Favorites/>} />
        <Route path="/Signin" element = {<Signin/>} />
        <Route path="/Signout" element = {<SignOut/>} />
        <Route path="/Details" element = {<Details/>} />
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
