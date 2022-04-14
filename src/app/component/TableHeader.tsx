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
        console.log("item ", item)
        if (selectedSort) {
            if (selectedSort.path === item) {
                onSort({...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc"});
            } else {
                onSort({path: item, order: "asc"});
            }
        }
    }
    console.log("selectedSort = ", selectedSort)
    const renderSortArrow = (selectedSort: SortByType, currentPath: string) => {
        return selectedSort.path === currentPath ? selectedSort.order === "asc" ?
            <i className="bi bi-caret-down-fill"></i> : <i className="bi bi-caret-up-fill"></i> : "";
    }

    return (
        <thead>
        <tr>
            {
                Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={() => columns[column].path ? handleSort(columns[column].path) : undefined}
                        scope="col"
                        // role={columns[column].iter && "button"}
                        {...{role: columns[column].path && "button"}}
                    >
                        {columns[column].name}
                        {
                            renderSortArrow(selectedSort, columns[column].path)
                        }
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
