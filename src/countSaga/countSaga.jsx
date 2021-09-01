import { put, takeEvery } from "@redux-saga/core/effects";
import {
	incrementCreator,
	decrementCreator,
	ASYNC_INCREMENT,
	ASYNC_DECREMENT,
} from "../store/countReducer";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
	yield delay(500);
	yield put(incrementCreator(5));
}
function* decrementWorker() {
	yield delay(500);
	yield put(decrementCreator(5));
}
export function* countWatcher() {
	yield takeEvery(ASYNC_INCREMENT, incrementWorker);
	yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}
