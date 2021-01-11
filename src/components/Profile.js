import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profile() {
  //Todo: Buttons for the links are currently wonky but work, need to make them look better
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={4}>
          <Button href="https://github.com/mcheung008">GitHub</Button>
          <Button href="https://www.linkedin.com/in/michael-cheung-73353396">
            LinkedIn
          </Button>
          <Button href="https://drive.google.com/file/d/1IMNuwv-sFvy3yYClwG8_YLGe5_sTxWuu/view?usp=sharing">
            Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
