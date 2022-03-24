import React from "react";
import {UsersType} from "../api/fake.api/user.api";

type PropsType = {
    onToggleBookmark: (id: string) => void
    user: UsersType
}

const Bookmark: React.FC<PropsType> = ({onToggleBookmark, user}) => {
    return (
        <button onClick={() => onToggleBookmark(user._id)}>
            <i className={"bi bi-bookmark" + (user.bookmark ? "-heart-fill" : "")}></i>
        </button>
    )
}

export default Bookmark;
