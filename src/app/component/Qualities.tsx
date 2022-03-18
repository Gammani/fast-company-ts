import React from "react";
import {QualityType} from "../api/fake.api/user.api";

type PropsType = {
    item: QualityType
}

const Qualities: React.FC<PropsType> = ({item}) => {
    return (
        <span className={"badge m-1 bg-" + item.color}>
            {item.name}
        </span>
    )
}

export default Qualities;
