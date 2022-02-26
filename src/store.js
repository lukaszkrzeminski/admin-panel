import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import usersReducer from './features/users/usersSlice';
import { watchFetchInitialUsers } from './features/users/usersSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchInitialUsers);

export default store;