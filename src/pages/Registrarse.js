import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';

function Registrarse() {
    return (
      <>
        <main>
          <h2>Estoy en Registrarse</h2>
          <p>mi texto en Registrarse</p>
        </main>
        <nav>
          <Link to="/">Ir a Inicio</Link>
        </nav>
      </>
    );
  }

export default Registrarse
