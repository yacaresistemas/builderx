import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';

function Temas() {
    return (
      <>
        <main>
          <h2>Estoy en Temas</h2>
          <p>mi texto en temas</p>
        </main>
        <nav>
          <Link to="/">Ir a Inicio</Link>
        </nav>
      </>
    );
  }

export default Temas
