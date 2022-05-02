import React, {useEffect, useState} from "react";
import api from "../../../api";
import {UsersType} from "../../../api/fake.api/user.api";
import QualitiesList from "../../ui/qualities/QualitiesList";
import {useNavigate} from "react-router-dom";

type PropsType = {
    userId: any
}

const UserPage: React.FC<PropsType> = ({userId}) => {

    const navigate = useNavigate();
    const [user, setUser] = useState<undefined | UsersType>();

    useEffect(() => {
        api.users.getById(userId).then((data: any) => setUser(data))
    }, [])

    const handleClickUsers = () => {
        navigate("/users");
    }
    const handleClickEdit = () => {
        navigate(`/users/${userId}/edit`);
    }

    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities}/>
                <h3>completedMeetings: {user.completedMeetings}</h3>
                <h2>Rate: {user.rate}</h2>
                <button onClick={handleClickUsers}>Все пользователи</button>
                <button onClick={handleClickEdit}>Изменить</button>
            </>
        );
    } else {
        return <h1>loading...</h1>
    }
};

export default UserPage;
