import _ from "lodash";

// Initial Store State
export const initialState = {
	loader: {
		isLoading: true,
		switchToHome: false,
	},
	menu: {
		buttonStates: {
			hamburger: false,
		},
	},
	basket: {
		items: 0,
	},
	user: null,
};

// Selectors
export const getNumberOfBasketItems = (basket) => {
	return basket.items;
};

// Action Handler
const reducer = (state, action) => {
	switch (action.type) {
		case "SET_HAMBURGER_STATE":
			return {
				...state,
				menu: {
					...state.menu,
					buttonStates: {
						...state.menu.buttonStates,
						hamburger: action.payload,
					},
				},
			};

		case "SET_PRELOADER":
			console.log("Animation Completed");
			return {
				...state,
				loader: {
					isLoading: action.payload,
				},
			};

		case "SET_SWITCH_TO_HOME":
			console.log("Switched to Homepage");
			return {
				...state,
				loader: {
					...state.loader,
					switchToHome: action.payload,
				},
			};

		case "SET_USER":
			return state;

		default:
			return state;
	}
};

export default reducer;
