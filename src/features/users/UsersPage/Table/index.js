import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toUser } from "../../../../routes";
import DeleteUserPopup from "../../DeleteUserPopup";
import { fetchInitialUsers, selectInitialStateSet, selectUsers, setUsersList, saveCurrentId, setPopupVisible, selectIsPopupVisible } from "../../usersSlice";
import { Button, Table, TableCell, TableHeaderCell, TableRow } from "./styled";

export const UsersTable = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userTable = useSelector(selectUsers);
    const isInitialStateSet = useSelector(selectInitialStateSet);
    const isPopupVisible = useSelector(selectIsPopupVisible);

    useEffect(() => {
        if (isInitialStateSet === false) {
            dispatch(fetchInitialUsers());
        }
        else {
            dispatch(setUsersList(userTable));
        }

    }, [dispatch]);

    const moveToUserPage = (id) => {
        dispatch(saveCurrentId(id));
        dispatch(history.push(toUser({ id })));
    }

    const deleteUser = (id) => {
        dispatch(saveCurrentId(id));
        dispatch(setPopupVisible());
    }

    if (!isPopupVisible) {
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
                            <TableCell><Button editUser onClick={() => moveToUserPage(user.id)}>Edit</Button></TableCell>
                            <TableCell><Button deleteUser onClick={() => deleteUser(user.id)}>Delete</Button></TableCell>
                        </TableRow>
                    )}
                </tbody>
            </Table>
        )
    } else if (isPopupVisible) {
        return (
            <>
                <DeleteUserPopup />
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
                                <TableCell><Button editUser onClick={() => moveToUserPage(user.id)}>Edit</Button></TableCell>
                                <TableCell><Button deleteUser onClick={() => deleteUser(user.id)}>Delete</Button></TableCell>
                            </TableRow>
                        )}
                    </tbody>
                </Table>
            </>
        )
    }
}