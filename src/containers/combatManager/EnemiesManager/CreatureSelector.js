import React, { Component } from "react";
import Select from "react-select";
import { Input } from "reactstrap";
import {
    monsterEnum,
    getStatsById,
} from "../../../services/combatManager/enemiesManager/EnemyCalculator";

class CreatureSelector extends Component {
    state = {
        selected: "",
        enemy: {
            ac: 0,
            hp: 0,
        },
    };

    options = [     
    ];

    componentDidMount() {
        for(let creature in monsterEnum) {
            this.options.push({value: creature, label: creature})
        }
    }

    onSelected = valueObj => {
        if (valueObj.value !== monsterEnum.custom) {
            this.props.onSelect(getStatsById(valueObj.value));
        }
        this.setState({ ...this.state, selected: valueObj.value });
    };

    onInputChangeHandler = evt => {
        const inputId = evt.target.id;
        const newValue = evt.target.value;

        if(inputId === 'hp') {
            if (!!this.state.enemy.ac) {
                this.props.onSelect({...this.state.enemy, [inputId]: newValue});
            }
        }

        if(inputId === 'ac') {
            if (!!this.state.enemy.hp) {
                this.props.onSelect({...this.state.enemy, [inputId]: newValue});
            }
        } 

        this.setState({
            ...this.state,
            enemy: { ...this.state.enemy, [inputId]: newValue },
        });
    };

    render() {
        const inputs =
            this.state.selected === monsterEnum.custom ? (
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

export default CreatureSelector;
