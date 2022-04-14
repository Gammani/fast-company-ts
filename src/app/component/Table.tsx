import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import {SortByType} from "./Users";
import {ColumnsType} from "./UsersTable";
import {UsersType} from "../api/fake.api/user.api";

type PropsType = {
    onSort?: (item: SortByType) => void
    selectedSort?: SortByType
    columns?: ColumnsType
    data?: UsersType[]
}

const Table: React.FC<PropsType> = ({onSort, selectedSort, columns, data, children}) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader {...{onSort, selectedSort}} columns={columns}/>
                    <TableBody {...{columns, data}}/>
                </>
            )}
        </table>
    );
};

export default Table;
