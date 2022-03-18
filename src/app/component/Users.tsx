import React from "react";
import {UsersType} from "../api/fake.api/user.api";
import User from "./User";

type PropsType = {
    users: UsersType[]
    onDelete: (id: string) => void
    onToggleBookmark: (id: string) => void
}

const Users = (props: PropsType) => {

    return (
        <div>
            {
                props.users.length > 0 &&
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.users.map((user) =>
                        (
                            <User key={user._id} onDelete={props.onDelete} user={user} onToggleBookmark={props.onToggleBookmark}/>
                        )
                    )}
                    </tbody>
                </table>
            }
        </div>
    )
};

export default Users;
