import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Day4() {
  return (
    <>
      {" "}
      <Navbar expand="lg" className=" my-3  justify-content-between">
        <Container>
          <Navbar.Brand href="#home">Main-Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Above</Nav.Link>
              <NavDropdown title="Service" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Web Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  MobileApp Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Wordpress Developers
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Other Developers
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Info</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control type="text" placeholder="Search" className="" />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
      <div className="row">
        <div className="w-50 col-4">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How I Achieved a Personal Goal
              </Accordion.Header>
              <Accordion.Body>
                I recently set a challenging goal for myself and worked
                diligently to achieve it. In this blog post, I'll share my
                journey, the obstacles I faced, and the strategies I used to
                successfully reach my goal. Hopefully, my experience will
                inspire and motivate you in your own goal-setting endeavors.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Learning from My Mistakes</Accordion.Header>
              <Accordion.Body>
                Mistakes are a part of life, and I'm no exception. In this post,
                I'll open up about a significant mistake I made, the
                consequences it had, and, most importantly, the valuable lessons
                I learned from it. It's essential to embrace our failures and
                use them as stepping stones towards personal growth.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>{" "}
          <div className="my-3">
            <Card>
              <Card.Header>Quotes</Card.Header>
              <Card.Body >
                <blockquote className="blockquote my-0">
                  <p>
                    {" "}
                    However difficult life may seem, there is always something
                    you can do and succeed at
                  </p>
                  <footer className="blockquote-footer">Stephen Hawking</footer>
                </blockquote>
              </Card.Body>
              <Card.Body>
                <blockquote className="blockquote my-0">
                  <p>
                    All our dreams can come true; if we have the courage to
                    pursue them
                  </p>
                  <footer className="blockquote-footer">Walt Disney</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="col-6 gap-2 d-flex">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="https://www.mytimemanagement.com/images/personal_goal_setting_full_9267662.png"
            />
            <Card.Body>
              <Card.Title>How I Achieved a Personal Goal</Card.Title>
              <Card.Text>
                I recently set a challenging goal for myself and worked
                diligently to achieve it. In this blog post, I'll share my
                journey, the obstacles I faced, and the strategies I used to
                successfully reach my goal. Hopefully, my experience will
                inspire and motivate you in your own goal-setting endeavors.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="https://imageio.forbes.com/b-i-forbesimg/amyanderson/files/2013/04/shutterstock_99137078.jpg?format=jpg&width=1200"
            />
            <Card.Body>
              <Card.Title>Learning from My Mistakes</Card.Title>
              <Card.Text>
                Mistakes are a part of life, and I'm no exception. In this post,
                I'll open up about a significant mistake I made, the
                consequences it had, and, most importantly, the valuable lessons
                I learned from it. It's essential to embrace our failures and
                use them as stepping stones towards personal growth.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Day4;
