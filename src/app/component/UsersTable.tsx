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
    currentSort: SortByType
}


const UsersTable: React.FC<PropsType> = ({users, onDelete, onToggleBookmark, onSort, currentSort}) => {


    return (
        <table className="table">
            <TableHeader onSort={onSort} selectedSort={currentSort} />
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
