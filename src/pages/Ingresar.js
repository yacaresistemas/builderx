import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';

function Ingresar() {
    return (
      <>
        <main>
          <h2>Estoy en Ingresar</h2>
          <p>mi texto en Ingresar</p>
        </main>
        <nav>
          <Link to="/">Ir a Inicio</Link>
        </nav>
      </>
    );
  }

export default Ingresar
