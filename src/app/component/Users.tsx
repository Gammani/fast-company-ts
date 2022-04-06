import React, {useEffect, useState} from "react";
import {ProfessionsTypeObject, ProfessionType, UsersType} from "../api/fake.api/user.api";
import User from "./User";
import Pagination from "./Pagination";
import api from "../api";
import {paginate} from "../utils/paginate";
import GroupList from "./GroupList";
import SearchStatus from "./SearchStatus";


type PropsType = {
    users: UsersType[]
    onDelete: (id: string) => void
    onToggleBookmark: (id: string) => void
}

const Users: React.FC<PropsType> = ({users: allUsers, onDelete, onToggleBookmark}) => {


    const pageSize: number = 4;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [professions, setProfessions] = useState<undefined | ProfessionsTypeObject | Array<ProfessionType>>(undefined);
    const [selectedProf, setSelectedProf] = useState<undefined | ProfessionType>(undefined);

    useEffect(() => {
        api.professions.fetchAll().then((data: any) => setProfessions(data));
    }, []);

    useEffect(() => {
        console.log(professions);
    }, [professions]);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = (item: ProfessionType) => {
        setSelectedProf(item);
        console.log(item);
    }

    const handlePageChange = (pageIndex: number) => {
        console.log('page: ', pageIndex)
        setCurrentPage(pageIndex);
    }

    const filteredUsers = selectedProf ? allUsers.filter(user => JSON.stringify(user.profession) === JSON.stringify(selectedProf)) : allUsers;
    const count: number = filteredUsers.length;

    let users = paginate(filteredUsers, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedProf(undefined);
    }


    return (
        <div className={"d-flex"}>
            {
                professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">

                        <GroupList
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                            selectedItem={selectedProf}
                        />
                        <button className={"btn btn-secondary mt-2"} onClick={clearFilter}>Очистить</button>
                    </div>
                )}
            <div className="d-flex flex-column">
                <SearchStatus length={count}/>
                {
                    count > 0 &&
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
                                <User key={user._id} onDelete={onDelete} user={user}
                                      onToggleBookmark={onToggleBookmark}/>
                            )
                        )}
                        </tbody>
                    </table>
                }
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    )
};

export default Users;
