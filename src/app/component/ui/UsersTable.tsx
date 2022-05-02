import React from "react";
import {UsersType} from "../../api/fake.api/user.api";
import {SortByType} from "../page/usersListPage/UsersListPage";
import Bookmark from "../common/Bookmark";
import Qualities from "./qualities";
import Table from "../common/table";
import {Link} from "react-router-dom";

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
type UserType = {
    path: string
    name: string
    component: (user: UsersType) => void
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
    [key: string]: ColumnType | BookmarkType | DeleteType | QualitiesType | UserType
    name: UserType
    qualities: QualitiesType
    professions: ColumnType
    completedMeetings: ColumnType
    rate: ColumnType
    bookmark: BookmarkType
    delete: DeleteType
}


const UsersTable: React.FC<PropsType> = ({users, onDelete, onToggleBookmark, onSort, selectedSort}) => {

    const columns: ColumnsType | undefined= {
        name: {path: "name", name: "Имя", component: (user: UsersType) => <Link to={`${user._id}`}>{user.name}</Link>},
        qualities: {name: "Качества", component: (user: UsersType) => (<Qualities qualities={user.qualities}/>)},
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
