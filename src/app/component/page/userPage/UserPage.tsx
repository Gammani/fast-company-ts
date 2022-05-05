import React, {useEffect, useState} from "react";
import api from "../../../api";
import {UsersType} from "../../../api/fake.api/user.api";
import QualitiesList from "../../ui/qualities/QualitiesList";
import {useNavigate} from "react-router-dom";
import UserCard from "../../ui/UserCard";
import QualitiesCard from "../../ui/QualitiesCard";
import MeetingsCard from "../../ui/MeetingsCard";
import Comments from "../../ui/Comments";

type PropsType = {
    userId: any
}

const UserPage: React.FC<PropsType> = ({userId}) => {

    const navigate = useNavigate();
    const [user, setUser] = useState<undefined | UsersType>();

    useEffect(() => {
        api.users.getById(userId).then((data: any) => setUser(data))
    }, [])


    if (user) {
        return (
            <div className={"container"}>
                {/*<h1>{user.name}</h1>*/}
                {/*<h2>Профессия: {user.profession.name}</h2>*/}
                {/*<QualitiesList qualities={user.qualities}/>*/}
                {/*<h3>completedMeetings: {user.completedMeetings}</h3>*/}
                {/*<h2>Rate: {user.rate}</h2>*/}
                {/*<button onClick={handleClickUsers}>Все пользователи</button>*/}
                {/*<button onClick={handleClickEdit}>Изменить</button>*/}
                <div className={"row gutters-sm"}>
                    <div className={"col-md mb-3"}>
                        <UserCard user={user}/>
                        <QualitiesCard data={user.qualities}/>
                        <MeetingsCard value={user.completedMeetings}/>
                    </div>
                    <div className="col-md-8">
                        <Comments />
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>loading...</h1>
    }
};

export default UserPage;
