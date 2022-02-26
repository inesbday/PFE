import React from "react";

import { Card, Row, Col } from "react-bootstrap";

function InfosCard({ title, infos, iconName, bgColor }) {
  return (
    <Card className={`card-stats ${bgColor}`}>
      <Card.Body>
        <Row className="d-flex align-items-center">
          <Col xs="5">
            <i className={`${iconName} fa-2x text-white`}></i>
          </Col>
          <Col xs="7">
            <div className="numbers">
              <h4 className="text-white">{title}</h4>
              <Card.Title as="h4" className="text-white">
                {infos}
              </Card.Title>
            </div>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <div className="stats text-white">
          <i className="fa fa-angle-right text-white"></i>
          Voir détailes
        </div>
      </Card.Footer>
    </Card>
  );
}

export default InfosCard;
