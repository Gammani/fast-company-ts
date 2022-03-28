import React, {useState} from "react";
import {UsersType} from "../api/fake.api/user.api";
import User from "./User";
import Pagination from "./Pagination";
import {paginate} from "../utils/paginate";
import GroupList from "./GroupList";


type PropsType = {
    users: UsersType[]
    onDelete: (id: string) => void
    onToggleBookmark: (id: string) => void
}

const Users: React.FC<PropsType> = ({users: allUsers, onDelete, onToggleBookmark}) => {

    const count: number = allUsers.length;
    const pageSize: number = 4;
    const [currentPage, setCurrentPage] = useState<number>(1);

    const handlePageChange = (pageIndex: number) => {
        console.log('page: ', pageIndex)
        setCurrentPage(pageIndex);
    }

    const users = paginate(allUsers, currentPage, pageSize);


    return (
        <>
            <GroupList />
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
                            <User key={user._id} onDelete={onDelete} user={user} onToggleBookmark={onToggleBookmark}/>
                        )
                    )}
                    </tbody>
                </table>
            }
            <Pagination itemsCount={count} pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange}/>
        </>
    )
};

export default Users;
