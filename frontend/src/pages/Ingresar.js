import React, { useEffect } from 'react'
import { Container, Row, Col, Button, Card, Form }  from 'react-bootstrap';
import TituloPagina from "../components/TituloPagina";
import apiClient from "../apiclient";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Formik } from "formik";
import * as yup from "yup";


function Ingresar(props) {

    const validationSchema = yup.object({
      email: yup.string()
      .email("Debe ser un email valido")
      .required("Email es requerido"),
      password: yup.string() 
      .required("Contraseña es requerido"),   
    });

    const Cerrar = () => {
      alert(9);
    }

    useEffect(() => {
      document.title = props?.title ? props.title : 'BuilderX';

      var usuarioNombre = sessionStorage.getItem("usuarioNombre");
      var usuarioId = sessionStorage.getItem("usuarioId");
      //console.log("usuarioNombre:"+usuarioNombre);
      //console.log("usuarioId:"+usuarioId);

    });

    const handleOnSubmit = (values, actions) => {
      try {
        
        const valoresEnviar = { email: values.email, password: values.password };
        apiClient.post("/login", valoresEnviar)
        .then(response => {
          let user = response.data.user
          toast.success("Ingresaste correctamente. Bienvenido "+user.nombre, {

          });
          sessionStorage.setItem("usuarioId", user.id);
          sessionStorage.setItem("usuarioNombre", user.nombre);
          window.location = 'plantillas';
        })
        .catch(error => {
          console.log(error);
        });        
    } catch (err) {
        console.log(err.response?.data || err);            
    }
  };

    
    
    return (
      <>
        <main>
          <TituloPagina titulo="Ingresar" />
          <ToastContainer 
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          
          />
          <Container style={{marginTop: 30}}>
            <Row className="justify-content-md-center">
              <Col lg="4">
                <Card>
                  <Card.Body>
                    <Card.Title>Ingrese a su cuenta</Card.Title>
                      <Formik
                        validationSchema={validationSchema}
                        onSubmit={handleOnSubmit}
                        initialValues={{
                          email: "jose@gmail.com",
                          password: "123456"
                        }}
                      >
                        {({
                          handleSubmit,
                          handleChange,
                          values,
                          errors,
                          touched,
                          isValid,
                          isSubmitting
                        }) => (
                          <Form noValidate onSubmit={handleSubmit} style={{textAlign: "left", marginTop: 20}}>
                            <Form.Group className="mb-3" controlId="email">
                              <Form.Label>Email:</Form.Label>
                              <Form.Control name="email" type="email" placeholder="Ingrese su email" value={values.email}
                              onChange={handleChange}
                            />                           
                            {touched.email && errors.email ? (
                              <div className="error-message" style={{color: 'red'}}>{errors.email}</div>
                            ): null}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                              <Form.Label>Contraseña</Form.Label>
                              <Form.Control name="password" type="password" placeholder="Contraseña"  value={values.password}
                              onChange={handleChange}/>
                              {touched.password && errors.password ? (
                              <div className="error-message" style={{color: 'red'}}>{errors.password}</div>
                            ): null}
                            </Form.Group>
                            
                            <Col style={{textAlign: "center"}}>
                              <Button
                                /* disabled={!isValid || isSubmitting} */
                                variant="success"
                                as="input"
                                type="submit"
                                value="Ingresar"
                                style={{backgroundColor: "#EC7313", borderColor: "#EC7313"}}
                              />
                            </Col>                          
                          </Form>
                        )}
                      </Formik>
                  </Card.Body>
                </Card>
              </Col>
            </Row>            
          </Container>
        </main>        
      </>
    );
  }

export default Ingresar
