import React from "react";
import User from "./User";
import {UsersType} from "../api/fake.api/user.api";
import {SortByType} from "./Users";
import TableHeader from "./TableHeader";

type PropsType = {
    users: UsersType[]
    onDelete: (id: string) => void
    onToggleBookmark: (id: string) => void
    onSort: (item: SortByType) => void
    selectedSort: SortByType
}

type ColumnType = {
    [key: string]: string
    // iter?: string
    // name?: string
}

export type ColumnsType = {
    [key: string]: ColumnType
    name: ColumnType
    qualities: ColumnType
    professions: ColumnType
    completedMeetings: ColumnType
    rate: ColumnType
    bookmark: ColumnType
    delete: ColumnType
}


const UsersTable: React.FC<PropsType> = ({users, onDelete, onToggleBookmark, onSort, selectedSort}) => {

    const column: ColumnsType = {
        name: {iter: "name", name: "Имя"},
        qualities: {name: "Качества"},
        professions: {iter: "profession.name", name: "Профессия"},
        completedMeetings: {iter: "completedMeetings", name: "Встретился, раз"},
        rate: {iter: "rate", name: "Оценка"},
        bookmark: {iter: "bookmark", name: "Избранное"},
        delete: {}
    }


    return (
        <table className="table">
            {/*<TableHeader onSort={onSort} selectedSort={selectedSort} columns={undefined}/>*/}
            <TableHeader {...{onSort, selectedSort}} columns={column}/>
            <tbody>
            {users.map((user) =>
                (
                    <User key={user._id} onDelete={onDelete} user={user}
                          onToggleBookmark={onToggleBookmark}/>
                )
            )}
            </tbody>
        </table>
    );
};

export default UsersTable;
