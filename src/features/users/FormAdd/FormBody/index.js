import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toUsersList } from "../../../../routes";
import { addNewUser, selectLastId } from "../../usersSlice";
import { ButtonContainer, FormButton, FormContainer, Input, Label, LabelText } from "./styled";

export const Form = () => {
    const [newName, setNewName] = useState();
    const [newMail, setNewMail] = useState();

    const history = useHistory();
    const dispatch = useDispatch();
    const lastId = useSelector(selectLastId);

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(addNewUser({
            id: lastId + 1,
            name: newName,
            username: "",
            email: newMail,
            address: "",
        }));

        history.push(toUsersList())
    }

    return (
        <form onSubmit={onFormSubmit}>
            <FormContainer>
                <Label>
                    <LabelText>Name*:</LabelText>
                    <Input
                        type="text"
                        required={true}
                        pattern={"^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$"}
                        onChange={(event) => setNewName(event.target.value)}
                        value={newName}
                        placeholder="Type Your name" />
                </Label>
                <Label>
                    <LabelText>E-mail*:</LabelText>
                    <Input
                        input="email"
                        required={true}
                        pattern={"[a-z]+@+[a-z]+.+[a-z]"}
                        onChange={(event) => setNewMail(event.target.value)}
                        value={newMail}
                        placeholder="Type Your e-mail" />
                </Label>
                <ButtonContainer>
                    <FormButton cancelAction onClick={() => history.push(toUsersList())}>Canacel</FormButton>
                    <FormButton type="submit" submitAction>Submit</FormButton>
                </ButtonContainer>
            </FormContainer>
        </form>
    )
}