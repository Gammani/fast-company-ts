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
    console.log({currentPage})
    const pages = _.range(1, pageCount + 1);

    return (
        // <nav aria-label="Page navigation example">
        //     <ul className="pagination">
        //         <li className="page-item"><a className="page-link" href="#">Previous</a></li>
        //         <li className="page-item"><a className="page-link" href="#">1</a></li>
        //         <li className="page-item"><a className="page-link" href="#">2</a></li>
        //         <li className="page-item"><a className="page-link" href="#">3</a></li>
        //         <li className="page-item"><a className="page-link" href="#">Next</a></li>
        //     </ul>
        // </nav>
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
