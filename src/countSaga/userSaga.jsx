import { call, put, takeEvery } from "@redux-saga/core/effects";
import { addUsersCreator, FETCH_USERS } from "../store/userReducer";

const fetchUsers = () =>
	fetch("https://jsonplaceholder.typicode.com/users?_limit=5");

function* fetchUsersWorker() {
	const data = yield call(fetchUsers);
	const users = yield call(() => new Promise((res) => res(data.json())));
	yield put(addUsersCreator(users));
}

export function* usersWatcher() {
	yield takeEvery(FETCH_USERS, fetchUsersWorker);
}
