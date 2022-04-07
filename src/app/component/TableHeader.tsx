import React from "react";
import {SortByType} from "./Users";

type PropsType = {
    onSort: (item: SortByType) => void
    selectedSort: SortByType
}

const TableHeader: React.FC<PropsType> = ({onSort, selectedSort}) => {

    const handleSort = (item: string) => {
        if(selectedSort.iter === item) {
            onSort({...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc"});
        } else {
            onSort({iter: item, order: "asc"});
        }
    }

    return (
        <thead>
        <tr>
            <th onClick={() => handleSort("name")} scope="col" role={"button"}>Имя</th>
            <th scope="col">Качества</th>
            <th role={"button"} onClick={() => handleSort("profession.name")} scope="col">Профессия</th>
            <th role={"button"} onClick={() => handleSort("completedMeetings")} scope="col">Встретился, раз</th>
            <th role={"button"} onClick={() => handleSort("rate")} scope="col">Оценка</th>
            <th role={"button"} onClick={() => handleSort("bookmark")} scope="col">Избранное</th>
            <th />
        </tr>
        </thead>
    );
};

export default TableHeader;
