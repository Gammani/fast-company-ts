import _ from "lodash";
import {UsersType} from "../api/fake.api/user.api";

export function paginate(items: Array<UsersType>, pageNumber: number, pageSize: number) {

    const startIndex = (pageNumber - 1) * pageSize;
    // _.slice(items, startIndex);
    // _.take(_.slice(items, startIndex), pageSize);

    return _(items).slice(startIndex).take(pageSize).value();
}