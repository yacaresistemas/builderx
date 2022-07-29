import React, { useEffect } from 'react'
import { Container, Row, Col, Button, Card, Form }  from 'react-bootstrap';
import TituloPagina from "../components/TituloPagina";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Formik } from "formik";
import * as yup from "yup";


function Registrarse(props) {

    const validationSchema = yup.object({
      nombre: yup.string()      
      .required("Nombre es requerido"),

      email: yup.string()
      .email("Debe ser un email valido")
      .required("Email es requerido"),

      password: yup.string() 
      .required("Contraseña es requerido"),   
    });


    useEffect(() => {
      document.title = props?.title ? props.title : 'BuilderX';

    });

    const handleOnSubmit = (values, actions) => {
      toast.success("Te registraste correctamente");
  };

    
    
    return (
      <>
        <main>
          <TituloPagina titulo="Registrarse" />
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
                    <Card.Title>Registrarse</Card.Title>
                      <Formik
                        validationSchema={validationSchema}
                        onSubmit={handleOnSubmit}
                        initialValues={{
                          nombre: "Jose",
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

                            <Form.Group className="mb-3" controlId="nombre">
                              <Form.Label>Email: <span style={{color: "red"}}>*</span></Form.Label>
                              <Form.Control name="nombre" type="text" placeholder="Ingrese su nombre" value={values.nombre}
                              onChange={handleChange}
                            />                           
                            {touched.nombre && errors.nombre ? (
                              <div className="error-message" style={{color: 'red'}}>{errors.nombre}</div>
                            ): null}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                              <Form.Label>Email: <span style={{color: "red"}}>*</span></Form.Label>
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
                                value="Registrarse"
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

export default Registrarse
