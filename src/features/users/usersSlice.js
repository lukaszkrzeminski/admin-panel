import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: true,
    },
    reducers: {
        fetchInitialUsers: (state) => {
            state.loading = true;    
        },
        fetchInitialUsersSuccess: (state, { payload: users}) => {
            state.users = users;
            state.loading = false;
        },
        fetchInitialUsersError: (state) => {
            state.loading = false;
        },
    },
});

export const {
    fetchInitialUsers,
    fetchInitialUsersSuccess,
    fetchInitialUsersError,
} = usersSlice.actions;

const selectUsersState = state => state.users;

export const selectUsers = state => selectUsersState(state).users;
export default usersSlice.reducer;