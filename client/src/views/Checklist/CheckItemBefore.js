import React from "react";
import { CustomInput, Button, Form, FormGroup, Label } from "reactstrap";

function CheckItemBefore() {
  return (
    <form>
      <FormGroup>
        <Label for="exampleCheckbox">
          {" "}
          <h4>Liste de controle : avant chargement</h4>
        </Label>
        <div>
          <CustomInput
            type="checkbox"
            id="example1"
            label="Assurance tracteur"
          />
          <CustomInput
            type="textarea"
            placeholder="Observation"
            id="example2"
            label="Observation"
          />
        </div>
      </FormGroup>

      <FormGroup>
        <CustomInput
          type="checkbox"
          id="example3"
          label="Visite technique tracteur"
        />
        <CustomInput
          type="textarea"
          placeholder="Observation"
          id="example4"
          label="Observation"
        />
      </FormGroup>
      <FormGroup>
        <CustomInput
          type="checkbox"
          id="example5"
          label="Carte grise tracteur"
        />
        <CustomInput
          type="textarea"
          placeholder="Observation"
          id="example6"
          label="Observation"
          //style={{ height: "3.5rem" }}
        />
      </FormGroup>

      <FormGroup>
        <CustomInput type="checkbox" id="example7" label="Carte exploitaion" />
        <CustomInput
          type="textarea"
          placeholder="Observation"
          id="example8"
          label="Observation"
        />
      </FormGroup>

      <FormGroup>
        <CustomInput
          type="checkbox"
          id="exampleCustomCheckbox"
          label="Assurance tracteur"
        />
        <CustomInput
          type="textarea"
          placeholder="Observation"
          id="exampleCustomCheckbox"
          label="Observation"
        />
      </FormGroup>
    </form>
  );
}

export default CheckItemBefore;
