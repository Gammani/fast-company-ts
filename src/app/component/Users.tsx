import React, {useEffect, useState} from "react";
import {ProfessionsTypeObject, ProfessionType, UsersType} from "../api/fake.api/user.api";
import Pagination from "./Pagination";
import api from "../api";
import {paginate} from "../utils/paginate";
import GroupList from "./GroupList";
import SearchStatus from "./SearchStatus";
import UsersTable from "./UsersTable";
import _ from "lodash";


type PropsType = {
    users: UsersType[]
    onDelete: (id: string) => void
    onToggleBookmark: (id: string) => void
}

export type SortByType = {
    iter: string
    order: "asc" | "desc"
}

const Users: React.FC<PropsType> = ({users: allUsers, onDelete, onToggleBookmark}) => {


    const pageSize: number = 4;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [professions, setProfessions] = useState<undefined | ProfessionsTypeObject | Array<ProfessionType>>(undefined);
    const [selectedProf, setSelectedProf] = useState<undefined | ProfessionType>(undefined);
    const [sortBy, setSortBy] = useState<SortByType>({iter: "name", order: "asc"});

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

    const filteredUsers = selectedProf ? allUsers.filter(user => JSON.stringify(user.profession) === JSON.stringify(selectedProf)) : allUsers;
    const count: number = filteredUsers.length;

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);

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
                        onDelete={onDelete}
                        onToggleBookmark={onToggleBookmark}
                        onSort={handleSort}
                        currentSort={sortBy}
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
};

export default Users;
