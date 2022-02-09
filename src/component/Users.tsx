import React, {useState} from "react";
import api from "../api";
import {UsersType} from "../api/fake.api/user.api";

const Users = () => {
    const [users, setUsers] = useState<Array<UsersType>>(api.users.fetchAll());
    const handleDelete = (id: string) => {
        const newUsers = users.filter(user => user._id !== id);
        setUsers(newUsers)
    };
    const handlePhrase = (value: number) => {
        if (value === 0) {
            return `Никто с тобой не тусанет`
        }
        let decCache: [] | number[] = [],
            decCases = [2, 0, 1, 1, 1, 2];

        function decOfNum(value: number, titles: string[]) {
            if (!decCache[value]) decCache[value] = value % 100 > 4 && value % 100 < 20 ? 2 : decCases[Math.min(value % 10, 5)];
            return titles[decCache[value]];
        }

        return decOfNum(value, [`${value} человек тусанет с тобой сегодня`, `${value} человека тусанут с тобой сегодня`, `${value} человек тусанет с тобой сегодня`]);
    };

    return (
        <div>
            <h1> <span className={users.length !== 0 ? "badge bg-primary" : "badge bg-danger"}>{handlePhrase(users.length)}</span></h1>
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
                {users.map((user) => {
                    return (
                        <tr key={user._id}>
                            <th scope="row" key={user._id}>{user.name}</th>
                            <td>{user.qualities.map((item) => <span key={item._id} className={`badge bg-${item.color} m-1`}>{item.name}</span>)}</td>
                            <td>{user.profession.name}</td>
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate}</td>
                            <td><button className={"btn btn-danger"} onClick={() => handleDelete(user._id)}>delete</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
};

export default Users;
