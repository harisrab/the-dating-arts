import _ from "lodash";

// Initial Store State
export const initialState = {
	loader: {
		isLoading: true,
	},
	menu: {
		buttonStates: {
			hamburger: false,
		},
	},
};

// Selectors

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
			return {
				...state,
				loader: {
					isLoading: action.payload
				}
			};

		case "SET_USER":
			return state;

		default:
			return state;
	}
};

export default reducer;
