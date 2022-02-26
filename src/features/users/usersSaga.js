import { takeEvery, call, put } from "redux-saga/effects";
import { getInitialUsers } from "./getInitialUsers";
import { fetchInitialUsers, fetchInitialUsersError, fetchInitialUsersSuccess } from "./usersSlice";

function* fetchInitialUsersHandler() {
    try {
        const initialUsers = yield call(getInitialUsers)
        yield put(fetchInitialUsersSuccess(initialUsers))
    } catch (error) {
        yield put(fetchInitialUsersError());
    }
}

export function* watchFetchInitialUsers() {
    yield takeEvery(fetchInitialUsers.type, fetchInitialUsersHandler);
}