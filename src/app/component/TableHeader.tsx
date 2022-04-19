import React from "react";
import {SortByType} from "./UsersList";
import {ColumnsType} from "./UsersTable";

type PropsType = {
    onSort?: (item: SortByType) => void
    selectedSort?: SortByType
    columns?: ColumnsType
}

const TableHeader: React.FC<PropsType> = ({onSort, selectedSort, columns}) => {

    const handleSort = (item: string) => {
        console.log("item ", item)
        if (selectedSort) {
            if (selectedSort.path === item) {
                if (onSort) onSort({...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc"});
            } else {
                if (onSort) onSort({path: item, order: "asc"});
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
                columns && Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={() => columns[column].path ? handleSort(columns[column].path) : undefined}
                        scope="col"
                        // role={columns[column].iter && "button"}
                        {...{role: columns[column].path && "button"}}
                    >
                        {columns[column].name}
                        {
                            selectedSort && renderSortArrow(selectedSort, columns[column].path)
                        }
                    </th>
                ))
            }
        </tr>
        </thead>
    );
};

export default TableHeader;
