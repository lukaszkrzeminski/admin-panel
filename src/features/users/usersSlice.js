import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: true,
        lastId: 10,
        initialStateSet: false,
    },
    reducers: {
        fetchInitialUsers: (state) => {
            state.loading = true;    
        },
        fetchInitialUsersSuccess: (state, { payload: users}) => {
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
    },
});

export const {
    fetchInitialUsers,
    fetchInitialUsersSuccess,
    fetchInitialUsersError,
    setUsersList,
    addNewUser,
} = usersSlice.actions;

const selectUsersState = state => state.users;

export const selectUsers = state => selectUsersState(state).users;
export const selectLastId = state => selectUsersState(state).lastId;
export const selectInitialStateSet = state => selectUsersState(state).initialStateSet;
export default usersSlice.reducer;