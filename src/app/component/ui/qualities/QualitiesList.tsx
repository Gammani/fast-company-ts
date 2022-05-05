import React from "react";
import Quality from "./Quality";
import {QualityType} from "../../../api/fake.api/user.api";

type PropsType = {
    qualities: Array<QualityType>
}

const QualitiesList: React.FC<PropsType> = ({qualities}) => {

    return (
        <>
            {qualities.map((item: QualityType) => (
                <Quality item={item} key={item._id}/>
            ))}
        </>
    );
};

export default QualitiesList;
