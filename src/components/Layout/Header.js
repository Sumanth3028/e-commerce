import React from "react";
import { Container, Navbar, Row, Col, Button, Card, Badge } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Music from "./Music";
import Merch from "./Merch";


const Header = (props) => {
  return (
    <div className="card text-centre">
      <Navbar bg="dark" expand="lg" variant="dark" >
        <Container fluid="lg">
          <Row>
            <Col>
              <Navbar.Brand href="/">
                <h1>Home</h1>
              </Navbar.Brand>
            </Col>
            <Col>
              <Navbar.Brand href="/">
                <h1>Store</h1>
              </Navbar.Brand>
            </Col>
            <Col>
              <Navbar.Brand href="/">
                <h1>About</h1>
              </Navbar.Brand>
            </Col>
            <Col>
              <Button variant="dark">
                <h2>Cart</h2>
                <Badge bg="secondary">0</Badge>
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
     <Card className="shadow-lg">
      <CardHeader className="display-2" style={{background:'grey',textAlign:'center',padding:'100px',fontFamily:'bold',color:'white'}}>The Generics</CardHeader>
      <Music />
      <Merch />
      <Card.Footer className="display-1" style={{background:'#87CEEB',textAlign:'start',fontSize:'100px',fontFamily:'bold',color:'white'}}>The Generics</Card.Footer> 
     </Card>
    </div>
  );
};

export default Header;
