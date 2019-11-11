import React, { Component } from "react";
import { Form, FormGroup, Col, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actionTypes";
import CreatureSelector from "./CreatureSelector";

class EnemiesManager extends Component {
    state = {
        enemy: {
            id: "",
            name: "",
            ac: "",
            hp: "",
            bonus: "",
            initiative: "",
        },
    };

    onSubmitEnemyHanlder = evt => {
        evt.preventDefault();
        const bonus = parseInt(this.state.enemy.bonus) || 0;
        const initiative =
            parseInt(this.state.enemy.initiative) ||
            Math.floor(Math.random() * 20) + bonus;

        const contender = {
            id: this.state.enemy.name + Math.random(),
            name: this.state.enemy.name,
            initiative: initiative,
            ac: this.state.enemy.ac,
            hp: this.state.enemy.hp,
        };

        this.props.onAddEnemy(contender);
    };

    onInputChangeHandler = evt => {
        const inputId = evt.target.id;
        const newValue = evt.target.value;

        this.setState({
            ...this.state,
            enemy: { ...this.state.enemy, [inputId]: newValue },
        });
    };

    onCreatureSelected = obj => {
        console.log(obj);
        this.setState({
            ...this.state,
            enemy: { ...this.state.enemy, ...obj },
        });
    };

    render() {
        return (
            <Form onSubmit={this.onSubmitEnemyHanlder}>
                <FormGroup row>
                    <Col>
                        <Input
                            type="text"
                            value={this.state.enemy.name}
                            onChange={this.onInputChangeHandler}
                            placeholder="Enemy name"
                            id="name"
                        />
                    </Col>
                    <Col>
                        <CreatureSelector
                            onSelect={this.onCreatureSelected}
                        ></CreatureSelector>
                    </Col>
                    {/* <Col>
                        <Input
                            type="text"
                            value={this.state.enemy.ac}
                            onChange={this.onInputChangeHandler}
                            placeholder="AC"
                            id="ac"
                        />
                    </Col>
                    <Col>
                        <Input
                            type="text"
                            value={this.state.enemy.hp}
                            onChange={this.onInputChangeHandler}
                            placeholder="HP"
                            id="hp"
                        />
                    </Col> */}
                    <Col>
                        <Input
                            type="number"
                            value={this.state.enemy.bonus}
                            onChange={this.onInputChangeHandler}
                            placeholder="bonus/malus"
                            id="bonus"
                        />
                    </Col>
                    <Col>
                        <Input
                            type="number"
                            value={this.state.enemy.initiative}
                            onChange={this.onInputChangeHandler}
                            placeholder="fixed initiative"
                            id="initiative"
                        />
                    </Col>
                    <Col>
                        <Button onClick={this.props.onAddContender}>
                            Add contender
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddEnemy: contender =>
            dispatch({ type: actionTypes.ADD_CONTENDER, contender: contender }),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(EnemiesManager);
