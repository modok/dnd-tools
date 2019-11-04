import React, { Component } from "react";
import { Input, Button, Col, Row } from "reactstrap";

class Editable extends Component {
    state = {
        isInEdit: false,
        newValue: 0,
    };

    onEditingHandler = () => {
        this.setState({ isInEdit: true, value: this.state.value });
    };

    onChangeHandler = evt => {
        this.setState({ ...this.state, newValue: evt.target.value });
    };

    dispatchNewValue = newValue => {
        this.props.changed(this.props.refId, newValue);
        this.setState({ ...this.state, value: newValue, isInEdit: false });
    };

    onFocusHandler = evt => {
        evt.target.select();
    };

    onExit = evt => {
        this.setState({ ...this.state, isInEdit: false });
    };

    onDamageHandler = evt => {
        const newValue =
            parseInt(this.props.value) - parseInt(this.state.newValue);
        this.dispatchNewValue(newValue);
    };

    onHealingHandler = evt => {
        const newValue =
            parseInt(this.props.value) + parseInt(this.state.newValue);
        this.dispatchNewValue(newValue);
    };

    render() {
        const element = this.state.isInEdit ? (
            <Row>
                <Col>
                    <Input
                        onFocus={this.onFocusHandler}
                        autoFocus
                        onChange={this.onChangeHandler}
                        type="number"
                    />
                </Col>
                <Col>
                    <Button color="danger" onClick={this.onDamageHandler}>
                        D
                    </Button>
                    <Button color="success" onClick={this.onHealingHandler}>
                        H
                    </Button>
                    <Button color="" onClick={this.onExit}>X</Button>
                </Col>
            </Row>
        ) : (
            <span onClick={this.onEditingHandler}>{this.props.value}</span>
        );
        return element;
    }
}

export default Editable;
