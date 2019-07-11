import React from "react";
import { Badge } from "reactstrap";

const contender = props => {
    return (
        <span>
            <span className="float-left">
                <Badge>{props.stats.initiative}</Badge>&nbsp;
                <strong>{props.stats.name}:</strong>
            </span>
            <span className="float-right">
                <Badge color="success">{props.stats.ac}</Badge> &nbsp;
                 <Badge color="danger">{props.stats.hp}</Badge>
            </span>
        </span>
    );
};

export default contender;
