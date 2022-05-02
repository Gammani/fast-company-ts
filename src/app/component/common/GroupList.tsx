import React from "react";
import {ProfessionsTypeObject, ProfessionType} from "../../api/fake.api/user.api";

type PropsType = {
    items: ProfessionsTypeObject | Array<ProfessionType>
    onItemSelect: (item: ProfessionType) => void
    selectedItem: ProfessionType | undefined
    valueProperty?: string
    contentProperty?: string
}

const GroupList: React.FC<PropsType> = ({items, onItemSelect, selectedItem, valueProperty = "_id", contentProperty = "name"}) => {


    if (!Array.isArray(items)) {
        return (
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][valueProperty]}
                        className={"list-group-item" + (selectedItem === items[item] ? " active" : "")}
                        onClick={() => onItemSelect(items[item])}
                        role={"button"}
                    >
                        {items[item][contentProperty]}
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <ul className="list-group">
            {items.map((item) => {
                return (
                    <li
                        key={item[valueProperty]}
                        className={"list-group-item" + (selectedItem === item ? " active" : "")}
                        onClick={() => onItemSelect(item)}
                        role={"button"}
                    >
                        {item[contentProperty]}
                    </li>
                )
            })
            }
        </ul>
    );
}


export default GroupList;
