import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import Contender from "../../components/Contenders/Contender/contender";

class Contenders extends Component {
    state = {
        onTurn: 0,
    };

    onNextTurn = () => {
        this.state.onTurn < this.props.contenders.length -1
            ? this.setState({ onTurn: this.state.onTurn + 1 })
            : this.setState({ onTurn: 0 });
    };

    render() {
        const listOfContenders = this.props.contenders
            .sort((prev, next) => next.initiative - prev.initiative)
            .map((p, i) => {
                const onTurn = this.state.onTurn === i ? "warning" : null;
                return (
                    <ListGroupItem color={onTurn} key={p.name}>
                        <Contender stats={p} />
                    </ListGroupItem>
                );
            });
        return (
            <div>
                <ListGroup>{listOfContenders}</ListGroup>

                <div className="d-flex justify-content-center">
                    <Button onClick={this.onNextTurn}>NEXT</Button>
                </div>
            </div>
        );
    }
}

export default Contenders;
