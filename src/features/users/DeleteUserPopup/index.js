import React from "react";
import { useDispatch } from "react-redux";
import { resetPopupVisible } from "../usersSlice";
import { PopupButtonContainer, Popup, PopupBackground, PopupText, Title, PopupButton } from "./style";

const DeleteUserPopup = () => {

    const dispatch = useDispatch();

    return (
        <PopupBackground>
            <Popup>
                <Title>Delete</Title>
                <PopupText>Are you sure?</PopupText>
                <PopupButtonContainer>
                    <PopupButton actionCancel onClick={() => dispatch(resetPopupVisible())}>Cancel</PopupButton>
                    <PopupButton actionDelete>Delete</PopupButton>
                </PopupButtonContainer>
            </Popup>
        </PopupBackground>
    )
}


export default DeleteUserPopup;