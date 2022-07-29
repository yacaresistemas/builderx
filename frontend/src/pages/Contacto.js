import React, { useEffect } from 'react'
import { Container, Row, Col, Button, Card, Form }  from 'react-bootstrap';
import TituloPagina from "../components/TituloPagina";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Formik } from "formik";
import * as yup from "yup";


function Contacto(props) {

    const validationSchema = yup.object({

      nombre: yup.string()
      .required("Nombre es requerido"),

      telefono: yup.string()
      .required("Telefono es requerido"),

      email: yup.string()
      .email("Debe ser un email valido")
      .required("Email es requerido"),

      mensaje: yup.string() 
      .required("Mensaje es requerido"),   
    });


    useEffect(() => {
      document.title = props?.title ? props.title : 'BuilderX';

    });

    const handleOnSubmit = (values, actions) => {
      toast.success("Mensaje recibido correctamente, en breve lo estaremos contactando");
  };

    
    
    return (
      <>
        <main>
          <TituloPagina titulo="Contacto" />
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
              <Col lg="6">
                <Card>
                  <Card.Body>
                    <Card.Title style={{marginBottom: 15}}>Complete el formulario y en breve lo estaremos contactando</Card.Title>
                      <Formik
                        validationSchema={validationSchema}
                        onSubmit={handleOnSubmit}
                        initialValues={{
                          nombre: "",
                          telefono: "",
                          email: "",
                          mensaje: ""
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
                            <Form.Group as={Row} className="mb-3">
                              <Col sm="6">
                                <Form.Label>Nombre: <span style={{color: "red"}}>*</span></Form.Label>
                                <Form.Control name="nombre" type="text" placeholder="Ingrese su Nombre" value={values.nombre}
                                  onChange={handleChange}
                                />                           
                                {touched.email && errors.email ? (
                                  <div className="error-message" style={{color: 'red'}}>{errors.email}</div>
                                ): null}
                              </Col>
                              <Col sm="6">
                                <Form.Label>Telefono: <span style={{color: "red"}}>*</span></Form.Label>
                                <Form.Control name="telefono" type="text" placeholder="Ingrese su Telefono" value={values.telefono}
                                  onChange={handleChange}
                                />                           
                                {touched.telefono && errors.telefono ? (
                                  <div className="error-message" style={{color: 'red'}}>{errors.telefono}</div>
                                ): null}
                              </Col>                              
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                              <Form.Label>Email <span style={{color: "red"}}>*</span></Form.Label>
                              <Form.Control name="email" type="email" placeholder="Email" value={values.email}
                              onChange={handleChange}/>
                              {touched.email && errors.email ? (
                              <div className="error-message" style={{color: 'red'}}>{errors.email}</div>
                            ): null}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="mensaje">
                              <Form.Label>Mensaje <span style={{color: "red"}}>*</span></Form.Label>
                              <Form.Control  as="textarea" rows={3}  name="mensaje" placeholder="Mensaje"  value={values.mensaje}
                              onChange={handleChange}/>
                              {touched.mensaje && errors.mensaje ? (
                              <div className="error-message" style={{color: 'red'}}>{errors.mensaje}</div>
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

export default Contacto
