import React from "react";

import ChartistGraph from "react-chartist";

import { Card } from "react-bootstrap";

function PieChart() {
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h4">Etat des vehicules</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="ct-chart ct-perfect-fourth" id="chartPreferences">
          <ChartistGraph
            data={{
              labels: ["20%", "30%", "30%", "20%"],
              series: [20, 30, 30, 20],
            }}
            type="Pie"
          />
        </div>
        <div className="legend d-flex justify-content-center align-items-center">
          <i className="fas fa-circle text-info mr-2"></i>
          Moyenne <i className="fas fa-circle text-danger mr-2"></i>
          Bonne <i className="fas fa-circle text-warning mr-2"></i>
          En panne <i className="fas fa-circle text-danger mr-2"></i>
          Mauvaise <i className="fas fa-circle text-danger mr-2"></i>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PieChart;
