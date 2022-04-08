import React from "react";
import {SortByType} from "./Users";
import {ColumnsType} from "./UsersTable";

type PropsType = {
    onSort: (item: SortByType) => void
    selectedSort: SortByType
    columns: ColumnsType
}

const TableHeader: React.FC<PropsType> = ({onSort, selectedSort, columns}) => {

    const handleSort = (item: string) => {
        if (selectedSort.iter === item) {
            onSort({...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc"});
        } else {
            onSort({iter: item, order: "asc"});
        }
    }

    return (
        <thead>
        <tr>
            {
                Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={() => columns[column].iter ? handleSort(columns[column].iter) : undefined}
                        scope="col"
                        // role={columns[column].iter && "button"}
                        {...{role: columns[column].iter && "button"}}
                    >
                        {columns[column].name}
                    </th>
                ))
            }
            {/*<th onClick={() => handleSort("name")} scope="col" role={"button"}>Имя</th>*/}
            {/*<th scope="col">Качества</th>*/}
            {/*<th role={"button"} onClick={() => handleSort("profession.name")} scope="col">Профессия</th>*/}
            {/*<th role={"button"} onClick={() => handleSort("completedMeetings")} scope="col">Встретился, раз</th>*/}
            {/*<th role={"button"} onClick={() => handleSort("rate")} scope="col">Оценка</th>*/}
            {/*<th role={"button"} onClick={() => handleSort("bookmark")} scope="col">Избранное</th>*/}
            {/*<th/>*/}
        </tr>
        </thead>
    );
};

export default TableHeader;
