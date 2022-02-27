import React from "react";
import { ButtonContainer, FormButton, FormContainer, Input, Label, LabelText } from "./styled";

export const Form = () => {

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
                <FormButton cancelAction>Canacel</FormButton>
                <FormButton submitAction>Submit</FormButton>
            </ButtonContainer>
        </FormContainer>
    )
}