import React from "react";
import Main from "../../../common/Main";

const UsersPage = () => {
    return(
        <Main>
            <table>
                <tbody>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tbody>
            </table>
        </Main>
    )
};

export default UsersPage;