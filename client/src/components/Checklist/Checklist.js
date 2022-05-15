import React, { useState } from "react";
import {
  CustomInput,
  Button,
  Form,
  FormGroup,
  Label,
  Row,
  Col,
} from "reactstrap";

import OptionModal from "./OptionModal";

function Checklist() {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);
  const [optionThree, setOptionThree] = useState(false);

  const toggleOptionOne = () => setOptionOne((prevState) => !prevState);
  const toggleOptionTwo = () => setOptionTwo((prevState) => !prevState);
  const toggleOptionThree = () => setOptionThree((prevState) => !prevState);

  return (
    <Row>
      <Col className="d-flex justify-content-center alogn-items-center">
        <Button className="btn-info" onClick={toggleOptionOne}>
          Option 1
        </Button>
      </Col>
      <Col className="d-flex justify-content-center alogn-items-center">
        <Button className="btn-warning" onClick={toggleOptionTwo}>
          Option 2
        </Button>
      </Col>
      <Col className="d-flex justify-content-center alogn-items-center">
        <Button className="btn-success" onClick={toggleOptionThree}>
          Option 3
        </Button>
      </Col>
      {/* Modals */}

      {optionOne && (
        <OptionModal show={optionOne} handleClose={toggleOptionOne} />
      )}
      {optionTwo && (
        <OptionModal show={optionTwo} handleClose={toggleOptionTwo} />
      )}
      {optionThree && (
        <OptionModal show={optionThree} handleClose={toggleOptionThree} />
      )}
    </Row>
  );
}

export default Checklist;
