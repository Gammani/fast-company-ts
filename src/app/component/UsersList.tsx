import React, {useEffect, useState} from "react";
import {ProfessionsTypeObject, ProfessionType, UsersType} from "../api/fake.api/user.api";
import Pagination from "./Pagination";
import api from "../api";
import {paginate} from "../utils/paginate";
import GroupList from "./GroupList";
import SearchStatus from "./SearchStatus";
import UsersTable from "./UsersTable";
import _ from "lodash";


export type SortByType = {
    path: string
    order: "asc" | "desc"
}

const UsersList: React.FC = () => {


    const pageSize: number = 4;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [professions, setProfessions] = useState<undefined | ProfessionsTypeObject | Array<ProfessionType>>(undefined);
    const [selectedProf, setSelectedProf] = useState<undefined | ProfessionType>(undefined);
    const [sortBy, setSortBy] = useState<SortByType>({path: "name", order: "asc"});

    const [users, setUsers] = useState<Array<UsersType> | undefined>(undefined);
    console.log("users init = ", users)

    useEffect(() => {
        api.users.fetchAll().then((data: any) => setUsers(data))
    }, [])


    const handleDelete = (id: string) => {
        if (users) {
            setUsers(users.filter((user: UsersType) => user._id !== id))
        }
    };

    const handleToggleBookMark = (id: string) => {
        if (users) {
            setUsers(
                users.map((user: UsersType) => {
                    if (id === user._id) {
                        return {...user, bookmark: !user.bookmark}
                    }
                    return user
                })
            )
        }
    };


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

    const handleSort = (item: SortByType) => {
        setSortBy(item)
    }

    if (users) {
        const filteredUsers = selectedProf ? users.filter(user => JSON.stringify(user.profession) === JSON.stringify(selectedProf)) : users;
        const count: number = filteredUsers && filteredUsers.length;

        const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);

        let usersCrop = paginate(sortedUsers, currentPage, pageSize);

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
                        count > 0 && <UsersTable
                            users={usersCrop}
                            onDelete={handleDelete}
                            onToggleBookmark={handleToggleBookMark}
                            onSort={handleSort}
                            selectedSort={sortBy}
                        />
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
    }
    return (
        <>
            loading...
        </>
    );
};

export default UsersList;
