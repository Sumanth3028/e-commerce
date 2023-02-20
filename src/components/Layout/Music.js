import React from "react";
import Colors from "../../assets/colors.png";
import Black from "../../assets/BlackandWhite.png";
import Yellow from "../../assets/YellowandBlack.png";
import Blue from "../../assets/Blue.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Music = (props) => {
  return (
    <>
      <header
        style={{
          textAlign: "center",
          color: "black",
          fontFamily: "bold",
          fontSize: "300px",
          marginTop:'200px',
        }}
      >
        <h1>Music</h1>
      </header>

      <Container style={{ display: "flex", justifyContent: "center", padding : "100px"}}>
        
        <Row md="auto"  >
          <Col md="auto" style={{margin : "100px" }} >
            <h3 style={{ textAlign: "center" }}>Colors</h3>
            <img src={Colors}></img>
            <h3 xl="auto">$100 <button className="btn-sm " style={{background:'#87CEEB',justifyContent: "center",marginLeft:'120px',marginTop:'20px'}}>
              add to cart
            </button></h3>
          </Col>
          <Col  md="auto" style={{margin : "100px" }} >
            <h3 style={{ textAlign: "center" }}>Yellow</h3>
            <img src={Yellow} sm></img>
            <h3 style={{ textAlign: "start"}}>$50 <button className="btn-sm " style={{background:'#87CEEB',justifyContent: "center",marginLeft:'120px',marginTop:'20px'}}>
              add to cart
            </button></h3>
            
          </Col>
        </Row>
      </Container>
     < Container style={{ display: "flex", justifyContent: "center", padding : "0px"}}>
        
        <Row md="auto"  >
          <Col md="auto" style={{margin : "100px" }} >
            <h3 style={{ textAlign: "center" }}>Black</h3>
            <img src={Black}></img>
            <h3 xl="auto">$100 <button className="btn-sm " style={{background:'#87CEEB',justifyContent: "center",marginLeft:'120px',marginTop:'20px'}}>
              add to cart
            </button></h3>
          </Col>
          <Col  md="auto" style={{margin : "100px" }} >
            <h3 style={{ textAlign: "center" }}>Blue</h3>
            <img src={Blue} sm></img>
            <h3 style={{ textAlign: "start"}}>$50 <button className="btn-sm " style={{background:'#87CEEB',justifyContent: "center",marginLeft:'120px',marginTop:'20px'}}>
              add to cart
            </button></h3>
            
          </Col>
        </Row>
        </Container>
    </>
  );
};

export default Music;
