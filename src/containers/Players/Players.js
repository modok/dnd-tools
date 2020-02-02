import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem, Button, Form, Spinner } from "reactstrap";
import * as actionTypes from "../../store/actionTypes";
import PlayerInput from "../../components/Players/PlayerInput/playerInput";

class Players extends Component {
    state = {
        playersInitiative: null,
    };

    componentDidMount() {
        const playersInitiative = { ...this.state.playersInitiative };

        this.props.players.forEach(p => {
            playersInitiative[p.name] = { initiative: "" };
        });

        this.setState({ playersInitiative: playersInitiative });
    }

    onInitiativeSetHandler = (event, playerName) => {
        const player = { ...this.state.playersInitiative[playerName] };
        player.initiative = parseInt(event.target.value);
        const newStatus = {
            ...this.state.playersInitiative,
            [playerName]: player,
        };
        this.setState({ playersInitiative: newStatus });
    };

    onResetHandler = () => {
        const updatePlayerInitiative = {...this.state.playersInitiative};
        for(let p in updatePlayerInitiative) {
            updatePlayerInitiative[p].initiative = ""
        }

        this.setState({playersInitiative: updatePlayerInitiative});
    }

    render() {
        const players = !this.state.playersInitiative ? <Spinner ></Spinner> : (
            <ListGroup>
                {this.props.players
                    .sort((prev, next) => next.initiative - prev.initiative)
                    .map((p, i) => {
                        return (
                            <ListGroupItem key={p.name}>
                                <PlayerInput
                                    name={p.name}
                                    changed={event =>
                                        this.onInitiativeSetHandler(
                                            event,
                                            p.name
                                        )
                                    }
                                    value={
                                        this.state.playersInitiative[p.name]
                                            .initiative
                                    }
                                />
                            </ListGroupItem>
                        );
                    })}
            </ListGroup>
        );
        return (
            <div>
                <Form
                    onSubmit={event => {
                        event.preventDefault();
                        this.props.onSubmitHandler(
                            this.state.playersInitiative
                        );
                    }}
                >
                    {players}
                    <div>
                        <Button>INIT COMBAT</Button>
                        <Button type="button" onClick={this.onResetHandler}>RESET</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitHandler: players =>
            dispatch({ type: actionTypes.ADD_ROSTER, players: players }),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Players);
