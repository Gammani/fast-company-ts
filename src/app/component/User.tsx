import React from "react";
import {UsersType} from "../api/fake.api/user.api";
import Quality from "./Quality";
import Bookmark from "./Bookmark";

type PropsType = {
    user: UsersType
    onDelete: (id: string) => void
    onToggleBookmark: (id: string) => void
}


const User: React.FC<PropsType> = ({user, onToggleBookmark, onDelete}) => {
    return (
        <tr key={user._id}>
            <th scope="row" key={user._id}>{user.name}</th>
            <td>
                {user.qualities.map((item) => (
                    <Quality item={item} key={item._id}/>
                ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <Bookmark onToggleBookmark={() => onToggleBookmark(user._id)} status={user.bookmark} key={user._id}/>
            </td>
            <td>
                <button className={"btn btn-danger"} onClick={() => onDelete(user._id)}>delete
                </button>
            </td>
        </tr>
    )
}

export default User;
