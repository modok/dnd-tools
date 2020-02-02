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

    const getUrl = (tag) => {
        return "https://www.dndbeyond.com/monsters/" + tag;
    }

    return (
        <span>
            <span className="float-left">
                <Badge>{props.stats.initiative}</Badge>&nbsp;
                <Badge color="success">{props.stats.ac}</Badge> &nbsp;
                <strong><a href={getUrl(props.stats.tag)} target="_blank" rel="noopener noreferrer">{props.stats.name}</a>:</strong>
            </span>
            <span className="float-right">
                {isEditable}
            </span>
        </span>
    );
};

export default contender;
