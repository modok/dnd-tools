import React, { Component } from "react";
import { Input } from "reactstrap";

class Editable extends Component {
    state = {
        isInEdit: false,
        value: "",
    };

    componentDidMount() {
        this.setState({ ...this.state, value: this.props.value });
    }

    onEditingHandler = () => {
        this.setState({ isInEdit: true, value: this.state.value });
    };

    onChangeHandler = evt => {
        this.setState({ ...this.state, value: evt.target.value });
    };

    onBlurHandler = evt => {
        this.props.changed(this.props.refId, this.state.value);
        this.setState({ ...this.state, isInEdit: false });
    };

    onFocusHandler = evt => {
        evt.target.select()
    }

    render() {
        const element = this.state.isInEdit ? (
            <span>
                <Input
                    onFocus={this.onFocusHandler}
                    autoFocus
                    value={this.state.value}
                    onChange={this.onChangeHandler}
                    onBlur={this.onBlurHandler}
                />
            </span>
        ) : (
            <span onClick={this.onEditingHandler}>{this.state.value}</span>
        );
        return element;
    }
}

export default Editable;
