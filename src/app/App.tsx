import React from "react";
import Users from "./layouts/Users";
import {Routes, Route, Navigate} from "react-router-dom";
import Login from "./layouts/Login";
import Main from "./layouts/Main";
import NavBar from "./component/NavBar";

const App = () => {

    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path={"/users"}>
                    <Route path={":userId"} element={<Users/>}/>
                    <Route path={""} element={<Users/>}/>

                </Route>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/"} element={<Main/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/" replace/>}
                />
            </Routes>
        </div>
    );
};

export default App;
