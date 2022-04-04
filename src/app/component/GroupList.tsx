import React from "react";

type PropsType = {
    items: any
    onItemSelect: (item: any) => void,
    selectedItem: any,
    valueProperty?: string,
    contentProperty?: string,
}

const GroupList: React.FC<PropsType> = ({items, onItemSelect, selectedItem, valueProperty = "_id", contentProperty = "name"}) => {

    const itemsIsArray = Array.isArray(items);

    return (
        <ul className="list-group">
            {itemsIsArray
                ? items.map((item) => {
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
                : Object.keys(items).map((item) => {
                    return (
                        <li
                            key={items[item][valueProperty]}
                            className={"list-group-item" + (selectedItem === items[item] ? " active" : "")}
                            onClick={() => onItemSelect(items[item])}
                            role={"button"}
                        >
                            {items[item][contentProperty]}
                        </li>
                    )
                })}
        </ul>
    );
};

export default GroupList;
