import Button from "./components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
	addUserCreator,
	fetchUsersCreator,
	removeUserCreator,
} from "./store/userReducer";
import {
	asyncIncrementCreator,
	asyncDecrementCreator,
} from "./store/countReducer";

function App() {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count.count);
	const users = useSelector((state) => state.user.users);

	const increment = (count) => dispatch(asyncIncrementCreator());
	const decrement = (count) => dispatch(asyncDecrementCreator());
	const addUser = (name) => {
		const user = {
			id: Date.now(),
			name: name,
		};
		dispatch(addUserCreator(user));
	};
	const removeUser = (user) => dispatch(removeUserCreator(user.id));

	return (
		<div className="App">
			<h1 style={{ textAlign: "center" }}>Count: {count}</h1>
			<Button onClick={() => decrement(5)}>Decrement</Button>
			<Button onClick={() => increment(5)}>Increment</Button>
			<Button onClick={() => addUser(prompt("Entername", "Max"))}>
				Add Customer
			</Button>
			<Button onClick={() => dispatch(fetchUsersCreator())}>Fetch Users</Button>
			{users.length > 0 ? (
				users.map((user) => (
					<div
						style={{
							textAlign: "center",
							padding: 10,
							margin: 10,
							border: "2px solid #5349d6",
						}}
						onClick={() => removeUser(user)}
					>
						{user.name}
					</div>
				))
			) : (
				<h1 style={{ textAlign: "center" }}>No one </h1>
			)}
		</div>
	);
}

export default App;
