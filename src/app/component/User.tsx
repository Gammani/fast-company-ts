import React from "react";
import {UsersType} from "../api/fake.api/user.api";
import Qualities from "./Qualities";
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
                    <Qualities item={item} key={item._id}/>
                ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <Bookmark onToggleBookmark={onToggleBookmark} user={user} key={user._id}/>
            </td>
            <td>
                <button className={"btn btn-danger"} onClick={() => onDelete(user._id)}>delete
                </button>
            </td>
        </tr>
    )
}

export default User;
