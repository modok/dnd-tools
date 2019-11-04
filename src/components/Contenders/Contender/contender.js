import React from "react";
import { Badge } from "reactstrap";
import Editable from "../../../containers/Editable/Editable";

const contender = props => {
    const id = props.stats.id;
    const isEditable = id ? (
        <Editable value={props.stats.hp} refId={id} changed={props.changed} />
    ) : (
        props.stats.hp
    );
    return (
        <span>
            <span className="float-left">
                <Badge>{props.stats.initiative}</Badge>&nbsp;
                <Badge color="success">{props.stats.ac}</Badge> &nbsp;
                <strong>{props.stats.name}:</strong>
            </span>
            <span className="float-right">
                {isEditable}
            </span>
        </span>
    );
};

export default contender;
