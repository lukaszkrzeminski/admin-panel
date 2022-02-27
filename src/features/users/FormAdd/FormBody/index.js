import React from "react";
import { useHistory } from "react-router-dom";
import { toUsersList } from "../../../../routes";
import { ButtonContainer, FormButton, FormContainer, Input, Label, LabelText } from "./styled";

export const Form = () => {

    const history = useHistory();

    return (
        <FormContainer>
            <Label>
                <LabelText>Name*:</LabelText>
                <Input required placeholder="Type Your name" />
            </Label>
            <Label>
                <LabelText>E-mail*:</LabelText>
                <Input required placeholder="Type Your e-mail" />
            </Label>
            <ButtonContainer>
                <FormButton cancelAction onClick={() => history.push(toUsersList())}>Canacel</FormButton>
                <FormButton submitAction>Submit</FormButton>
            </ButtonContainer>
        </FormContainer>
    )
}