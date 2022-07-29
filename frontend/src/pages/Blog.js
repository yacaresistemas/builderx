import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Button }  from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TituloPagina from "../components/TituloPagina";
import BlogImg from "../img/blog.webp";


function Blog(props) {
    useEffect(() => {
      document.title = props?.title ? props.title : 'BuilderX';
    });    

    return (
      <>
        <TituloPagina titulo="Blog" />
        <Container style={{marginTop: 30}}>          
          <Row>
            <Col lg="4">
                <Card style={{ width: '100%',  marginTop: 20, textAlign: "left" }}>
                    <img src={BlogImg} style={{height: 250, width: "100%"}} alt="Mi blog" />
                    <Card.Body>
                    <Card.Title>Mi blog</Card.Title>
                    <Card.Text>
                        Mi texto del blog
                    </Card.Text>
                    <Link to="/blog-detalle" >
                      <Button variant="primary">Ver</Button>
                    </Link>                    
                  </Card.Body>
                </Card>
            </Col>
            <Col lg="4">
                <Card style={{ width: '100%',  marginTop: 20, textAlign: "left" }}>
                    <img src={BlogImg} style={{height: 250, width: "100%"}} alt="Mi blog" />
                    <Card.Body>
                    <Card.Title>Mi blog</Card.Title>
                    <Card.Text>
                        Mi texto del blog
                    </Card.Text>
                    <Link to="/blog-detalle" >
                      <Button variant="primary">Ver</Button>
                    </Link>  
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="4">
                <Card style={{ width: '100%',  marginTop: 20, textAlign: "left" }}>
                    <img src={BlogImg} style={{height: 250, width: "100%"}} alt="Mi blog" />
                    <Card.Body>
                    <Card.Title>Mi blog</Card.Title>
                    <Card.Text>
                        Mi texto del blog
                    </Card.Text>
                    <Link to="/blog-detalle" >
                      <Button variant="primary">Ver</Button>
                    </Link>  
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="4">
                <Card style={{ width: '100%',  marginTop: 20, textAlign: "left" }}>
                    <img src={BlogImg} style={{height: 250, width: "100%"}} alt="Mi blog" />
                    <Card.Body>
                    <Card.Title>Mi blog</Card.Title>
                    <Card.Text>
                        Mi texto del blog
                    </Card.Text>
                    <Link to="/blog-detalle" >
                      <Button variant="primary">Ver</Button>
                    </Link>  
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="4">
                <Card style={{ width: '100%',  marginTop: 20, textAlign: "left" }}>
                    <img src={BlogImg} style={{height: 250, width: "100%"}} alt="Mi blog" />
                    <Card.Body>
                    <Card.Title>Mi blog</Card.Title>
                    <Card.Text>
                        Mi texto del blog
                    </Card.Text>
                    <Link to="/blog-detalle" >
                      <Button variant="primary">Ver</Button>
                    </Link>  
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="4">
                <Card style={{ width: '100%',  marginTop: 20, textAlign: "left" }}>
                    <img src={BlogImg} style={{height: 250, width: "100%"}} alt="Mi blog" />
                    <Card.Body>
                    <Card.Title>Mi blog</Card.Title>
                    <Card.Text>
                        Mi texto del blog
                    </Card.Text>
                    <Link to="/blog-detalle" >
                      <Button variant="primary">Ver</Button>
                    </Link>  
                    </Card.Body>
                </Card>
            </Col>
          </Row>            
        </Container>               
      </>
    );
  }

export default Blog
