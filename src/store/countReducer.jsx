const defaultState = {
	count: 0,
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const ASYNC_DECREMENT = "ASYNC_DECREMENT";

export const countReducer = (state = defaultState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + action.num };
		case DECREMENT:
			return { ...state, count: state.count - action.num };
		default:
			return state;
	}
};

export const incrementCreator = (num) => ({ type: INCREMENT, num });
export const decrementCreator = (num) => ({ type: DECREMENT, num });
export const asyncIncrementCreator = () => ({ type: ASYNC_INCREMENT });
export const asyncDecrementCreator = () => ({ type: ASYNC_DECREMENT });
