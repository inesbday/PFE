import { Card, Container, Row, Col, Button } from "react-bootstrap";
import React, { useState } from "react";
import Table from "./TableUsers";
import AjouterUser from "../../components/Modals/AjouterUser/AjouterUser";
function Utilisateurs() {
  const [openAjouterUser, setOpenAjouterUser] = useState(false);

  const toggleOpenAjouterUser = () => {
    setOpenAjouterUser(!openAjouterUser);
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h3">Liste des utilisateurs </Card.Title>
              </Card.Header>
            
              <Button className="btn-primary" onClick={toggleOpenAjouterUser}>
                Ajouter user
              </Button>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {openAjouterUser && (
          <AjouterUser
            show={openAjouterUser}
            handleClose={toggleOpenAjouterUser}
          />
        )}
      </Container>
    </>
  );
}

export default Utilisateurs;
