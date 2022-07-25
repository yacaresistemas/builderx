import React, { useEffect } from 'react'
import { Container, Row, Col, Button, Card, Form }  from 'react-bootstrap';
import TituloPagina from "../components/TituloPagina";


import { Formik } from "formik";
import * as yup from "yup";


function Ingresar(props) {

    const schema = yup.object({
      email: yup.string().required(),
      clave: yup.string().required()    
    });

    useEffect(() => {
      document.title = props?.title ? props.title : 'BuilderX';
    });
    
    return (
      <>
        <main>
          <TituloPagina titulo="Ingresar" />
          <Container style={{marginTop: 30}}>
            <Row className="justify-content-md-center">
              <Col lg="4">
                <Card>
                  <Card.Body>
                    <Card.Title>Ingrese a su cuenta</Card.Title>
                      <Formik
                        validationSchema={schema}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 1000);
                        }}
                        initialValues={{
                          email: "",
                          password: ""
                        }}
                      >
                        {({
                          handleSubmit,
                          handleChange,
                          values,
                          errors,
                          isValid,
                          isSubmitting
                        }) => (
                          <Form noValidate onSubmit={handleSubmit} style={{textAlign: "left", marginTop: 20}}>
                            <Form.Group className="mb-3" controlId="email">
                              <Form.Label>Email:</Form.Label>
                              <Form.Control name="email" type="email" placeholder="Ingrese su email" />                           
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                              <Form.Label>Contraseña</Form.Label>
                              <Form.Control name="password" type="password" placeholder="Contraseña" />
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
