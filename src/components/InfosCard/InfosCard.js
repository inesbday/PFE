import React from "react";

import { Card, Row, Col } from "react-bootstrap";

function InfosCard({ title, infos, iconName, bgColor }) {
  return (
    <Card className={`card-stats ${bgColor}`}>
      <Card.Body>
        {/* Ligne Icon */}
        <Row className="d-flex justify-content-start align-items-center">
          <Col>
            <i className={`${iconName} fa-2x text-white`}></i>
          </Col>

          <Col className="d-flex justify-content-center align-items-center">
            <h4 className="text-white mt-0 mb-0">{infos}</h4>
          </Col>
        </Row>

        {/* Ligne Text */}
        <Row className="d-flex justify-content-start align-items-center">
          <Col xs="12">
            <h4 className="text-white">{title}</h4>
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
