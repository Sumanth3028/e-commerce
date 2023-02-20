import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Tshirt from '../../assets/Shirt.png'
import Coffee from '../../assets/Cofee.png'

const Merch=(props)=>{
   
    return (
        <>
          <header
            style={{
              textAlign: "center",
              color: "black",
              fontFamily: "bold",
              fontSize: "300px",
              marginTop:'150px',
            }}
          >
            <h1>Merch</h1>
          </header>
    
          <Container style={{ display: "flex", justifyContent: "center", padding : "100px"}}>
            
            <Row md="auto"  >
              <Col md="auto" style={{margin : "100px" }} >
                <h3 style={{ textAlign: "center" }}>T-shirt</h3>
                <img src={Tshirt}></img>
                <h3 xl="auto">$100 <button className="btn-sm " style={{background:'#87CEEB',justifyContent: "center",marginLeft:'120px',marginTop:'20px'}}>
                  add to cart
                </button></h3>
              </Col>
              <Col  md="auto" style={{margin : "80px" }} >
                <h3 style={{ textAlign: "center" }}>Coffee-cup</h3>
                <img src={Coffee} sm></img>
                <h3 style={{ textAlign: "start"}}>$50 <button className="btn-sm " style={{background:'#87CEEB',justifyContent: "center",marginLeft:'120px',marginTop:'20px'}}>
                  add to cart
                </button></h3>
                
              </Col>
            </Row>
          </Container>
          </>
    )
}

export default Merch