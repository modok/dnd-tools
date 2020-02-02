import React, { Component } from "react";
import { connect } from "react-redux";

import { Container, Row, Col, Jumbotron } from "reactstrap";
import Contenders from "../Contenders/Contenders";
import * as actionTypes from "../../store/actionTypes";
import Players from "../Players/Players";
import EnemiesManager from "./EnemiesManager/EnemiesManager";

class CombatManager extends Component {
    render() {
        const cachedContenders = JSON.parse(localStorage.getItem('contenders'));
        const contenders =
            this.props.contenders.length !== 0 ?
                this.props.contenders :
                cachedContenders ? cachedContenders : [];

        return (
            <div>
                <Jumbotron>
                    <EnemiesManager />
                </Jumbotron>
                <Container fluid>
                    <Row>
                        <Col xs="3">
                            <Players players={this.props.players} />
                        </Col>
                        <Col xs="9">
                            <Contenders contenders={contenders} saveToLocalStorage={this.saveToLocalStorage} onClear={this.clearAll} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    saveToLocalStorage = () => {
        localStorage.setItem('contenders', JSON.stringify(this.props.contenders));
    }

    clearAll = () => {
        localStorage.removeItem('contenders');
        this.props.onClear();
    }
}

const mapStateToProps = state => {
    return {
        contenders: state.contenders,
        players: state.players,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClear: () => {
            dispatch({ type: actionTypes.CLEAR });
        },
        onAddContender: () =>
            dispatch({
                type: actionTypes.ADD_CONTENDER,
                contender: {
                    name: "Puppa" + Math.random(),
                    initiative: 10,
                    ac: 17,
                    hp: 55,
                },
            }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CombatManager);
