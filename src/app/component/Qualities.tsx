import React from "react";
import {QualityType} from "../api/fake.api/user.api";

type PropsType = {
    item: QualityType
}

const Qualities = (props: PropsType) => {
    return (
        <span className={"badge m-1 bg-" + props.item.color}>
            {props.item.name}
        </span>
    )
}

export default Qualities;
