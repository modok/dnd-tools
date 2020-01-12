import React, { Component } from "react";
import Select from "react-select";
import { Input } from "reactstrap";
import {connect} from "react-redux";

class CreatureSelector extends Component {
    state = {
        selected: "",
        enemy: {
            ac: 0,
            hp: 0,
        },
    };

    options = [];

    componentDidMount() {
        const creatures = this.props.creatures;
        for (let i = 0; i <= creatures.length - 1; i++) {
            this.options.push({ value: creatures[i].name, label: creatures[i].name });
        }
    }

    getStatsById = (id) => {
        const creatures = this.props.creatures;
        for (let i = 0; i < creatures.length -1; i++) {
            if(creatures[i].name === id) {
                return {
                    ac: creatures[i].ac,
                    hp: creatures[i].hp,
                }
            }
        }
    }

    onSelected = valueObj => {
        if (valueObj.value !== "custom") {
            this.props.onSelect({...this.getStatsById(valueObj.value), tag: valueObj.value});
        }
        this.setState({ ...this.state, selected: valueObj.value });
    };

    onInputChangeHandler = evt => {
        const inputId = evt.target.id;
        const newValue = evt.target.value;

        if (inputId === "hp") {
            if (!!this.state.enemy.ac) {
                this.props.onSelect({
                    ...this.state.enemy,
                    [inputId]: newValue,
                    tag: this.state.selected
                });
            }
        }

        if (inputId === "ac") {
            if (!!this.state.enemy.hp) {
                this.props.onSelect({
                    ...this.state.enemy,
                    [inputId]: newValue,
                    tag: this.state.selected
                });
            }
        }

        this.setState({
            ...this.state,
            enemy: { ...this.state.enemy, [inputId]: newValue },
        });
    };

    render() {
        const inputs =
            this.state.selected === "custom" ? (
                <span>
                    <Input
                        type="text"
                        value={this.state.enemy.ac}
                        onChange={this.onInputChangeHandler}
                        placeholder="AC"
                        id="ac"
                    />
                    <Input
                        type="text"
                        value={this.state.enemy.hp}
                        onChange={this.onInputChangeHandler}
                        placeholder="HP"
                        id="hp"
                    />
                </span>
            ) : ( 
                ""
            );
        return (
            <span>
                <Select
                    options={this.options}
                    onChange={this.onSelected}
                ></Select>

                {inputs}
            </span>
        );
    }
}

const mapStateToProps = state => {
    return {
        creatures: state.creatures,
    }
}

export default connect(mapStateToProps)(CreatureSelector);
