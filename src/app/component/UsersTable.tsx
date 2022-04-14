import React from "react";
import {UsersType} from "../api/fake.api/user.api";
import {SortByType} from "./Users";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Bookmark from "./Bookmark";
import QualitiesList from "./QualitiesList";

type PropsType = {
    users: UsersType[]
    onDelete: (id: string) => void
    onToggleBookmark: (id: string) => void
    onSort: (item: SortByType) => void
    selectedSort: SortByType
}

type ColumnType = {
    [key: string]: string
    // in lodash is missing type undefined for 'PropertyPath'
    // path?: string
    // name?: string
}
type BookmarkType = {
    path: string
    name: string
    component: (user: UsersType) => void
}
type DeleteType = any
type QualitiesType = {
    name: string
    component: (user: UsersType) => void
}

export type ColumnsType = {
    [key: string]: ColumnType | BookmarkType | DeleteType | QualitiesType
    name: ColumnType
    qualities: QualitiesType
    professions: ColumnType
    completedMeetings: ColumnType
    rate: ColumnType
    bookmark: BookmarkType
    delete: DeleteType
}


const UsersTable: React.FC<PropsType> = ({users, onDelete, onToggleBookmark, onSort, selectedSort}) => {

    const columns: ColumnsType = {
        name: {path: "name", name: "Имя"},
        qualities: {name: "Качества", component: (user: UsersType) => (<QualitiesList qualities={user.qualities}/>)},
        professions: {path: "profession.name", name: "Профессия"},
        completedMeetings: {path: "completedMeetings", name: "Встретился, раз"},
        rate: {path: "rate", name: "Оценка"},
        bookmark: {
            path: "bookmark", name: "Избранное", component: (user: UsersType) => (<Bookmark
                onToggleBookmark={() => onToggleBookmark(user._id)}
                status={user.bookmark}
            />)
        },
        delete: {
            component: (user: UsersType) => (<button className={"btn btn-danger"} onClick={() => onDelete(user._id)}>
                delete
            </button>)
        }
    }


    return (
        <table className="table">
            {/*<TableHeader onSort={onSort} selectedSort={selectedSort} columns={undefined}/>*/}
            <TableHeader {...{onSort, selectedSort}} columns={columns}/>
            <TableBody {...{columns, data: users}}/>
            {/*<tbody>*/}
            {/*{users.map((user) =>*/}
            {/*    (*/}
            {/*        <User key={user._id} onDelete={onDelete} user={user}*/}
            {/*              onToggleBookmark={onToggleBookmark}/>*/}
            {/*    )*/}
            {/*)}*/}
            {/*</tbody>*/}
        </table>
    );
};

export default UsersTable;
