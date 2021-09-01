const defaultState = {
	users: [],
};

export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const ADD_USERS = "ADD_USERS";
export const FETCH_USERS = "FETCH_USERS";

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_USERS:
			return { ...state, users: [...state.users, ...action.users] };
		case ADD_USER:
			return { ...state, users: [...state.users, action.user] };
		case REMOVE_USER:
			return {
				...state,
				users: state.users.filter((user) => action.user !== user.id),
			};
		default:
			return state;
	}
};

export const addUserCreator = (user) => ({ type: ADD_USER, user });
export const removeUserCreator = (user) => ({
	type: REMOVE_USER,
	user,
});
export const addUsersCreator = (users) => ({
	type: ADD_USERS,
	users,
});
export const fetchUsersCreator = () => ({ type: FETCH_USERS });
