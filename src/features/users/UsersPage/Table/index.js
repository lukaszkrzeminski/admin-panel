import React from "react";
import { Table, TableCell, TableHeaderCell, TableRow } from "./styled";

export const UsersTable = () => (
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
            <TableRow>
                <TableCell>tmp Id</TableCell>
                <TableCell>tmp Name</TableCell>
                <TableCell>tmp Username</TableCell>
                <TableCell>tpm Email</TableCell>
                <TableCell>tmp City</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
            </TableRow>
        </tbody>
    </Table>
)