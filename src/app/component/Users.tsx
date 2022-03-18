import React from "react";
import {UsersType} from "../api/fake.api/user.api";
import User from "./User";

type PropsType = {
    users: UsersType[]
    onDelete: (id: string) => void
    onToggleBookmark: (id: string) => void
}

const Users: React.FC<PropsType> = ({users, onDelete, onToggleBookmark}) => {

    return (
        <div>
            {
                users.length > 0 &&
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
                    {users.map((user) =>
                        (
                            <User key={user._id} onDelete={onDelete} user={user} onToggleBookmark={onToggleBookmark}/>
                        )
                    )}
                    </tbody>
                </table>
            }
        </div>
    )
};

export default Users;
