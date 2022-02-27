import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ButtonAdd, Title, Wrapper } from "./styled";
import { toAddForm } from "../../../routes";

const UsersPageHeader = () => {

    const history = useHistory();

    return (
        <Wrapper>
            <Title>User List</Title>
            <ButtonAdd onClick={() => history.push(toAddForm())}>Add New</ButtonAdd>
        </Wrapper>
    )

}

export default UsersPageHeader;