import React, {useState} from "react";
import Users from "./component/Users";
import {UsersType} from "./api/fake.api/user.api";
import api from "./api";

const App = () => {

    const [users, setUsers] = useState<Array<UsersType>>(api.users.fetchAll());

    const handleDelete = (id: string) => {
        setUsers(users.filter(user => user._id !== id))
    };

    const handleToggleBookMark = (id: string) => {
        setUsers(
            users.map((user) => {
                if(id === user._id) {
                    return {...user, bookmark: !user.bookmark}
                }
                return user
            })
        )
    };

    return (
        <div>
            <Users onDelete={handleDelete} users={users} onToggleBookmark={handleToggleBookMark}/>
        </div>
    )
};

export default App;
