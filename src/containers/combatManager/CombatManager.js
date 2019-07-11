import React, { Component } from "react";
import { connect } from "react-redux";

import { Container, Row, Col, Jumbotron, Button } from "reactstrap";
import Contenders from "../Contenders/Contenders";
import * as actionTypes from "../../store/actionTypes";

class CombatManager extends Component {
    render() {
        return (
            <div>
                <Jumbotron><Button onClick={this.props.onAddContender}>Add contender</Button></Jumbotron>
                <Container>
                    <Row>
                        <Col>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddContender: () => dispatch({type: actionTypes.ADD_CONTENDER, contender: { name: "Puppa" + Math.random(), initiative: 10, ac: 17, hp: 55 }})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CombatManager);
