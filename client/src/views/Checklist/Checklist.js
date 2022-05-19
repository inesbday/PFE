import React, { useState } from "react";
import { Row } from "reactstrap";
import CardComponent from "./CardComponent";
import OptionModalBefore from "./OptionBefore";

import OptionModal from "./OptionModal";
import test2 from "./test2.jpg";

function Checklist() {
  const [optionOne, setOptionOne] = useState(false);
  const [optionOneBefore, setOptionOneBefore] = useState(false);

  const [optionTwo, setOptionTwo] = useState(false);
  const [optionTwoBefore, setOptionTwoBefore] = useState(false);

  const [optionThree, setOptionThree] = useState(false);
  const [optionThreeBefore, setOptionThreeBefore] = useState(false);

  const toggleOptionOne = () => setOptionOne((prevState) => !prevState);
  const toggleOptionOneBefore = () =>
    setOptionOneBefore((prevState) => !prevState);

  const toggleOptionTwo = () => setOptionTwo((prevState) => !prevState);
  const toggleOptionTwoBefore = () =>
    setOptionTwoBefore((prevState) => !prevState);

  const toggleOptionThree = () => setOptionThree((prevState) => !prevState);
  const toggleOptionThreeBefore = () =>
    setOptionThreeBefore((prevState) => !prevState);

  return (
    <Row className="justify-content-between">
      <CardComponent
        image={test2}
        handleClickAfter={toggleOptionOne}
        handleClickBefore={toggleOptionOneBefore}
        label="Controle documents"
        btnClassName="btn-info"
      />

      <CardComponent
        image={test2}
        handleClickAfter={toggleOptionTwo}
        handleClickBefore={toggleOptionTwoBefore}
        label="Controle équipements"
        btnClassName="btn-alert"
      />

      <CardComponent
        image={test2}
        handleClickAfter={toggleOptionThree}
        handleClickBefore={toggleOptionThreeBefore}
        label="Controle batiments"
        btnClassName="btn-success"
      />

      {/* Modals */}

      {optionOne && (
        <OptionModal show={optionOne} handleClose={toggleOptionOne} />
      )}

      {optionOneBefore && (
        <OptionModalBefore
          show={optionOneBefore}
          handleClose={toggleOptionOneBefore}
        />
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
