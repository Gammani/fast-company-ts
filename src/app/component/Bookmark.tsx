import React from "react";
import {UsersType} from "../api/fake.api/user.api";

type PropsType = {
    onToggleBookmark: (id: string) => void
    user: UsersType
}

const Bookmark = (props: PropsType) => {
    return (
        <button onClick={() => props.onToggleBookmark(props.user._id)}>
            <i className={"bi bi-bookmark" + (props.user.bookmark ? "-heart-fill" : "")}></i>
        </button>
    )
}

export default Bookmark;
