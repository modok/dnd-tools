import React, { Component } from "react";
import { connect } from "react-redux";

import { Container, Row, Col, Jumbotron } from "reactstrap";
import Contenders from "../Contenders/Contenders";
import * as actionTypes from "../../store/actionTypes";
import Players from "../Players/Players";
import EnemiesManager from "./EnemiesManager/EnemiesManager";

class CombatManager extends Component {
    render() {
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
                            <Contenders contenders={this.props.contenders} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
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
