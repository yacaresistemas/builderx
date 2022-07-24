import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';

function Contacto() {
    return (
      <>
        <main>
          <h2>Estoy en Contacto</h2>
          <p>mi texto en Contacto</p>
        </main>
        <nav>
          <Link to="/">Ir a Inicio</Link>
        </nav>
      </>
    );
  }

export default Contacto
