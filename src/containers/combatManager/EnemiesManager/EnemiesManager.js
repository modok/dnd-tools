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
            tag: "",
        },
    };

    onSubmitEnemyHanlder = evt => {
        evt.preventDefault();
        const bonus = parseInt(this.state.enemy.bonus) || 0;
        const initiative =
            parseInt(this.state.enemy.initiative) ||
            Math.floor(Math.random() * 20) + 1 + bonus;

        const contender = {
            id: this.state.enemy.name + Math.random(),
            name: this.state.enemy.name,
            initiative: initiative,
            ac: this.state.enemy.ac,
            hp: this.state.enemy.hp,
            tag: this.state.enemy.tag,
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
                            creatures={this.props.creatures}
                        ></CreatureSelector>
                    </Col>
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
                        <Button onClick={this.onSubmitEnemyHanlder}>
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

const mapStateToProps = state => {
    return {
        creatures: state.creatures,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnemiesManager);
