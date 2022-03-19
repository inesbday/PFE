import React from "react";

import ChartistGraph from "react-chartist";

import { Card } from "react-bootstrap";

function PieChart() {
  return (
    <Card>
      <Card.Header>
        <Card.Title as="h4">Email Statistics</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="ct-chart ct-perfect-fourth" id="chartPreferences">
          <ChartistGraph
            data={{
              labels: ["40%", "20%", "40%"],
              series: [40, 20, 40],
            }}
            type="Pie"
          />
        </div>
        <div className="legend d-flex justify-content-center align-items-center">
          <i className="fas fa-circle text-info mr-2"></i>
          Open <i className="fas fa-circle text-danger mr-2"></i>
          Bounce <i className="fas fa-circle text-warning mr-2"></i>
          Unsubscribe
        </div>
      </Card.Body>
    </Card>
  );
}

export default PieChart;
