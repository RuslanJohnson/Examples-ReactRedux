import { createStore, combineReducers, applyMiddleware } from "redux";
import { countReducer } from "./countReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./userReducer";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../countSaga";

const sagaMiidleware = createSagaMiddleware();

const rootReducer = combineReducers({
	count: countReducer,
	user: userReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiidleware))
);

sagaMiidleware.run(rootWatcher);

export default store;
