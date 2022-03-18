import React from "react";
import {UsersType} from "../api/fake.api/user.api";
import Qualities from "./Qualities";
import Bookmark from "./Bookmark";

type PropsType = {
    user: UsersType
    onDelete: (id: string) => void
    onToggleBookmark: (id: string) => void
}


const User = (props: PropsType) => {
    return (
        <tr key={props.user._id}>
            <th scope="row" key={props.user._id}>{props.user.name}</th>
            <td>
                {props.user.qualities.map((item) => (
                    <Qualities item={item} key={item._id}/>
                ))}
            </td>
            <td>{props.user.profession.name}</td>
            <td>{props.user.completedMeetings}</td>
            <td>{props.user.rate}</td>
            <td>
                <Bookmark onToggleBookmark={props.onToggleBookmark} user={props.user} key={props.user._id}/>
            </td>
            <td>
                <button className={"btn btn-danger"} onClick={() => props.onDelete(props.user._id)}>delete
                </button>
            </td>
        </tr>
    )
}

export default User;
