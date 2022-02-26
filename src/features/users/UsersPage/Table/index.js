import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialUsers, selectUsers } from "../../usersSlice";
import { Button, Table, TableCell, TableHeaderCell, TableRow } from "./styled";

export const UsersTable = () => {

    const dispatch = useDispatch();
    const userTable = useSelector(selectUsers);

    useEffect( () => {
        dispatch(fetchInitialUsers());
    }, [dispatch]);

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
                {userTable.map((user) =>
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