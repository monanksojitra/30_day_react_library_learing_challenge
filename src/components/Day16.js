import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Day16() {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    // Fetch memes data from the API
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((response) => {
        const memeData = response.data.data.memes;
        setMemes(memeData);
      })
      .catch((error) => {
        console.error("Error fetching memes:", error);
      });
  }, []);

  return (
    <div className="Day16">
      <Container style={{ overflowY: "scroll", maxHeight: "500px" }}>
        <Row>
          {memes.map((meme) => (
            <Col key={meme.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card>
                <div style={{ maxHeight: "200px", overflow: "hidden" }}>
                  <Card.Img variant="top" src={meme.url} alt={meme.name} />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Day16;
