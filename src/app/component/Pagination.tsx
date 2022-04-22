import React from "react";
import _ from "lodash";

type PropsType = {
    itemsCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageIndex: number) => void
}

const Pagination: React.FC<PropsType> = ({itemsCount, pageSize, onPageChange, currentPage}) => {

    const pageCount = Math.ceil(itemsCount / pageSize);
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className={'pagination'}>
                {
                    pages.map((page) => (
                        <li className={'page-item ' + (page === currentPage ? 'active' : '')} key={page}>
                            <a className={'page-link'} onClick={() => onPageChange(page)}>{page}</a>
                        </li>
                    ))
                }

            </ul>
        </nav>
    )
};

export default Pagination;
