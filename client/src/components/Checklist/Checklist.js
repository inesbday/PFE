import React from "react";
import { CustomInput, Button, Form, FormGroup, Label } from "reactstrap";
function Checklist() {
  return (
    <form>
      <FormGroup>
        <Label for="exampleCheckbox">Check List</Label>
        <div>
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox"
            label="Option 1"
          />
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox2"
            label="Option 2"
          />
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox3"
            label="Option1 3 "
          />
        </div>
      </FormGroup>

      <FormGroup>
        <Label for="exampleCheckbox">Check List</Label>
        <div>
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox4"
            label="Option 1"
          />
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox5"
            label="Option 2"
          />
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox6"
            label="Option1 3 "
          />
        </div>
      </FormGroup>

      <FormGroup>
        <Label for="exampleCheckbox">Check List</Label>
        <div>
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox7"
            label="Option 1"
          />
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox8"
            label="Option 2"
          />
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox9"
            label="Option1 3 "
          />
        </div>
      </FormGroup>

      <FormGroup>
        <Label for="exampleCheckbox">Check List</Label>
        <div>
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox10"
            label="Option 1"
          />
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox11"
            label="Option 2"
          />
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox12"
            label="Option1 3 "
          />
        </div>
      </FormGroup>

      <Button>Submit</Button>
    </form>
  );
}

export default Checklist;
