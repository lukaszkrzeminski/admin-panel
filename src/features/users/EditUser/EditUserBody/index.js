import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EditUserButton, EditUserButtonContainer, EditUserFormContainer, Input, Label, LabelText } from "./styled";
import { toUsersList } from "../../../../routes";
import { editUserData, selectCurrentId } from "../../usersSlice";

export const EditUserBody = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const currentId = useSelector(selectCurrentId);

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(editUserData({
            id: currentId,
            name: name,
            username: username,
            email: email,
            city: city,
        }));

        history.push(toUsersList())
    }

    return (
        <form onSubmit={onFormSubmit}>
            <EditUserFormContainer>
                <Label>
                    <LabelText>Name:</LabelText>
                    <Input
                        type="text"
                        required
                        pattern={"^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$"}
                        placeholder="new name"
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </Label>
                <Label>
                    <LabelText>Username:</LabelText>
                    <Input
                        type="text"
                        placeholder="new username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)} />
                </Label>
                <Label>
                    <LabelText>E-mail:</LabelText>
                    <Input
                        type="email"
                        required
                        pattern={"[a-z]+@+[a-z]+.+[a-z]"}
                        placeholder="new e-mail"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </Label>
                <Label>
                    <LabelText>City:</LabelText>
                    <Input
                        type="text"
                        placeholder="new city"
                        value={city}
                        onChange={(event) => setCity(event.target.value)} />
                </Label>
                <EditUserButtonContainer>
                    <EditUserButton cancelAction onClick={() => history.push(toUsersList())}>Canacel</EditUserButton>
                    <EditUserButton type="submit" submitAction>Submit</EditUserButton>
                </EditUserButtonContainer>
            </EditUserFormContainer>
        </form>
    )
}