import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: true,
        lastId: 10,
        initialStateSet: false,
        currentId: "",
        isPopupVisible: false,
    },
    reducers: {
        fetchInitialUsers: (state) => {
            state.loading = true;
        },
        fetchInitialUsersSuccess: (state, { payload: users }) => {
            state.users = users;
            state.loading = false;
            state.initialStateSet = true;
        },
        fetchInitialUsersError: (state) => {
            state.loading = false;
        },
        setUsersList: (state, { payload: users }) => {
            state.users = users;
        },
        addNewUser: (state, { payload }) => {
            state.users.push(payload);
            state.lastId = state.lastId + 1;
        },
        saveCurrentId: (state, { payload }) => {
            state.currentId = payload;
        },
        editUserData: (state, { payload }) => {
                state.users[payload.id-1].name = payload.name;
                state.users[payload.id-1].username = payload.username;
                state.users[payload.id-1].email = payload.email;
                state.users[payload.id-1].address.city = payload.city;
        },
        setPopupVisible: (state) => {
            state.isPopupVisible = true;
        },
        resetPopupVisible: (state) => {
            state.isPopupVisible = false;
        },
        deleteUser: (state, { payload }) => {
            const index = state.users.findIndex(user => user.id === payload);
            state.users.splice(index, 1);
        },
    },
});

export const {
    fetchInitialUsers,
    fetchInitialUsersSuccess,
    fetchInitialUsersError,
    setUsersList,
    addNewUser,
    saveCurrentId,
    editUserData,
    setPopupVisible,
    resetPopupVisible,
    deleteUser,
} = usersSlice.actions;

const selectUsersState = state => state.users;

export const selectUsers = state => selectUsersState(state).users;
export const selectLastId = state => selectUsersState(state).lastId;
export const selectCurrentId = state => selectUsersState(state).currentId;
export const selectInitialStateSet = state => selectUsersState(state).initialStateSet;
export const selectIsPopupVisible = state => selectUsersState(state).isPopupVisible;
export default usersSlice.reducer;