import React from "react";
import {UsersType} from "../api/fake.api/user.api";
import {SortByType} from "./Users";
import Bookmark from "./Bookmark";
import QualitiesList from "./QualitiesList";
import Table from "./Table";

type PropsType = {
    users: UsersType[]
    onDelete: (id: string) => void
    onToggleBookmark: (id: string) => void
    onSort: (item: SortByType) => void
    selectedSort: SortByType
}

type ColumnType = {
    [key: string]: string
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

    const columns: ColumnsType | undefined= {
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
        <Table onSort={onSort} selectedSort={selectedSort} columns={columns} data={users}/>
    );
};

export default UsersTable;
