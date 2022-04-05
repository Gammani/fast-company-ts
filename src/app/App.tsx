import React, {useEffect, useState} from "react";
import Users from "./component/Users";
import api from "./api";
import {UsersType} from "./api/fake.api/user.api";

const App = () => {

    const [users, setUsers] = useState<Array<UsersType> | undefined>(undefined);
    console.log("users init = ", users)

    useEffect(() => {
        api.users.fetchAll().then((data: any) => setUsers(data))
    }, [])

    const handleDelete = (id: string) => {
        if(users) {
            setUsers(users.filter((user: UsersType) => user._id !== id))
        }
    };

    const handleToggleBookMark = (id: string) => {
        if(users) {
            setUsers(
                users.map((user: UsersType) => {
                    if(id === user._id) {
                        return {...user, bookmark: !user.bookmark}
                    }
                    return user
                })
            )
        }
    };

    return (
        <div>
            {users ? <Users onDelete={handleDelete} users={users} onToggleBookmark={handleToggleBookMark}/> : "...loading"}

        </div>
    )
};

export default App;
