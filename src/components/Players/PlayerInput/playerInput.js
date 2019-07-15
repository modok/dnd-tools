import React from "react";
import { Input, Label, FormGroup, Col } from "reactstrap";

const playerInput = props => {
    return (
        <FormGroup row>
            <Label xs="4">{props.name} </Label>
            <Col xs="8">
                <Input
                    type="text"
                    value={props.value}
                    onChange={props.changed}
                />
            </Col>
        </FormGroup>
    );
};

export default playerInput;
