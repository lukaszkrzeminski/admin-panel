import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../../usersSlice";
import { Button, Table, TableCell, TableHeaderCell, TableRow } from "./styled";

export const UsersTable = () => {

    const userTable = useSelector(selectUsers);

    return (
        <Table>
            <tbody>
                <TableRow headerRow>
                    <TableHeaderCell>Id</TableHeaderCell>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Username</TableHeaderCell>
                    <TableHeaderCell>Email</TableHeaderCell>
                    <TableHeaderCell>City</TableHeaderCell>
                    <TableHeaderCell>Edit</TableHeaderCell>
                    <TableHeaderCell>Delete</TableHeaderCell>
                </TableRow>
                {userTable.map(user =>
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.address.city}</TableCell>
                        <TableCell><Button editUser>Edit</Button></TableCell>
                        <TableCell><Button deleteUser>Delete</Button></TableCell>
                    </TableRow>
                )}
            </tbody>
        </Table>
    )
}