import React from "react";

type PropsType = {
    onToggleBookmark: () => void
    status: boolean
}

const Bookmark: React.FC<PropsType> = ({onToggleBookmark, status}) => {
    return (
        <button onClick={() => onToggleBookmark()}>
            <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
        </button>
    )
}

export default Bookmark;
