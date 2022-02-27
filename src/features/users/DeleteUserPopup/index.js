import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, resetPopupVisible, selectCurrentId } from "../usersSlice";
import { PopupButtonContainer, Popup, PopupBackground, PopupText, Title, PopupButton } from "./style";

const DeleteUserPopup = () => {

    const dispatch = useDispatch();
    const id = useSelector(selectCurrentId);

    const deleteChosenUser = (id) => {
        dispatch(deleteUser(id));
        dispatch(resetPopupVisible());
    }

    return (
        <PopupBackground>
            <Popup>
                <Title>Delete</Title>
                <PopupText>Are you sure?</PopupText>
                <PopupButtonContainer>
                    <PopupButton actionCancel onClick={() => dispatch(resetPopupVisible())}>Cancel</PopupButton>
                    <PopupButton actionDelete onClick={() => deleteChosenUser(id)}>Delete</PopupButton>
                </PopupButtonContainer>
            </Popup>
        </PopupBackground>
    )
}


export default DeleteUserPopup;