import React from "react";
import {ColumnsType} from "./UsersTable";
import {UsersType} from "../api/fake.api/user.api";
import _ from "lodash";

type PropsType = {
    data?: UsersType[]
    columns?: ColumnsType
}

const TableBody: React.FC<PropsType> = ({data, columns}) => {

    const renderContent = (item: UsersType, column: string) => {

        {
            if(columns) {
                if (columns[column].component) {
                    const component = columns[column].component
                    if (typeof component === "function") {
                        return component(item);
                    }
                    return component
                }
                return _.get(item, columns[column].path);
            }
        }
    }

    return (
        <tbody>
        {data && data.map((item: UsersType) => (
            <tr key={item._id}>
                {columns && Object.keys(columns).map((column) => (
                    <td key={column}>
                        {renderContent(item, column)}
                    </td>
                ))}
            </tr>
        ))}
        </tbody>
    );

};

export default TableBody;
