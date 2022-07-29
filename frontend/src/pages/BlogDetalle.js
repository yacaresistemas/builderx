import React, { useEffect } from 'react'
import { Container, Row, Col, Card }  from 'react-bootstrap';
import TituloPagina from "../components/TituloPagina";
import BlogImg from "../img/blog.webp";


function BlogDetalle(props) {
    useEffect(() => {
      document.title = props?.title ? props.title : 'BuilderX';
    });    

    return (
      <>
        <TituloPagina titulo="Blog" />
        <Container style={{marginTop: 30}}>          
          <Row>
            <Col lg="12">
                <Card style={{  marginTop: 20, textAlign: "left", alignItems: "center", paddingTop: 20 }}>
                    <img src={BlogImg} style={{height: 400, width: 600}} alt="Mi blog" />
                    <Card.Body>
                        <Card.Title>Mi blog</Card.Title>
                        <Card.Text style={{textAlign: "justify"}}>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>


                        </Card.Text>                    
                    </Card.Body>
                </Card>
            </Col>            
          </Row>            
        </Container>               
      </>
    );
  }

export default BlogDetalle
