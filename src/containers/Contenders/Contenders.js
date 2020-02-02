import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";

import Contender from "../../components/Contenders/Contender/contender";

class Contenders extends Component {
    state = {
        onTurn: 0,
    };

    componentDidUpdate() {
        if (this.props.contenders.length === 0 && this.state.onTurn !== 0) {
            this.setState({ onTurn: 0 });
        }
    }

    onNextTurn = () => {
        const filteredContenders = this.props.contenders.filter(
            c => c.initiative > 0 && c.hp > 0
        );
        let nextTurn = this.state.onTurn + 1;
        if (filteredContenders.length < this.state.onTurn) {
            nextTurn = 0;
        }

        if (filteredContenders.length < nextTurn) {
            const nextCreatureHp = this.props.contenders[nextTurn];
            if (nextCreatureHp <= 0) {
            }
        } else {
        }

        this.state.onTurn < this.props.contenders.length - 1
            ? this.setState({ onTurn: this.state.onTurn + 1 })
            : this.setState({ onTurn: 0 });
    };

    onContenderChanged = (id, newValue) => {
        this.props.onContenderHpChanged(id, newValue);
    };

    render() {
        const listOfContenders = this.props.contenders
            .filter(c => c.initiative > 0 && c.hp > 0)
            .sort((prev, next) => next.initiative - prev.initiative)
            .map((p, i) => {
                const onTurn =
                    this.state.onTurn === i
                        ? "warning"
                        : p.hp <= 0
                        ? "danger"
                        : null;
                const key = p.name + Math.random();

                return (
                    <ListGroupItem color={onTurn} key={key}>
                        <Contender
                            stats={p}
                            changed={this.onContenderChanged}
                        />
                    </ListGroupItem>
                );
            });
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <Button onClick={this.onNextTurn}>NEXT</Button>
                </div>
                <ListGroup>{listOfContenders}</ListGroup>

                <div className="d-flex justify-content-center">
                    <Button onClick={this.onNextTurn}>NEXT</Button>
                </div>
                {/* <div className="d-flex justify-content-center">
                    <Button color="danger" onClick={this.props.onClear}>
                        CLEAR
                    </Button>
                </div> */}
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
        onClear: () => dispatch({ type: actionTypes.CLEAR }),
        onContenderHpChanged: (id, newValue) => {
            dispatch({
                type: actionTypes.CHANGE_CONTENDER_HP,
                contender: { id: id, hp: newValue },
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contenders);
