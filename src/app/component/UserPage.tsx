import React, {useEffect, useState} from "react";
import api from "../api/index";
import {UsersType} from "../api/fake.api/user.api";
import QualitiesList from "./QualitiesList";
import {useNavigate} from "react-router-dom";

type PropsType = {
    userId: any
}

const UserPage: React.FC<PropsType> = ({userId}) => {

    const navigate = useNavigate();
    const [user, setUser] = useState<undefined | UsersType>();

    useEffect(() => {
        api.users.getById(userId).then((data: any) => setUser(data))
    })

    const handleClick = () => {
        navigate("/users");
    }

    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities}/>
                <h3>completedMeetings: {user.completedMeetings}</h3>
                <h2>Rate: {user.rate}</h2>
                <button onClick={handleClick}>Все пользователи</button>
            </>
        );
    } else {
        return <h1>loading...</h1>
    }
};

export default UserPage;
