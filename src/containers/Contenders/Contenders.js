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
        this.state.onTurn < this.props.contenders.length - 1
            ? this.setState({ onTurn: this.state.onTurn + 1 })
            : this.setState({ onTurn: 0 });
    };

    render() {
        const listOfContenders = this.props.contenders
            .sort((prev, next) => next.initiative - prev.initiative)
            .map((p, i) => {
                const onTurn = this.state.onTurn === i ? "warning" : null;
                const key = p.name + Math.random();
                return (
                    <ListGroupItem color={onTurn} key={key}>
                        <Contender stats={p} />
                    </ListGroupItem>
                );
            });
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <Button onClick={this.onNextTurn}>NEXT</Button>
                    <Button color="danger" onClick={this.props.onClear}>
                        CLEAR
                    </Button>
                </div>
                <ListGroup>{listOfContenders}</ListGroup>

                <div className="d-flex justify-content-center">
                    <Button onClick={this.onNextTurn}>NEXT</Button>
                    <Button color="danger" onClick={this.props.onClear}>
                        CLEAR
                    </Button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClear: () => dispatch({ type: actionTypes.CLEAR }),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Contenders);
