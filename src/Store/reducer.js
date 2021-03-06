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
	cmsData: {
		status: "idle",
		error: null,
		data: [],
	},
	user: null,
	upcomingEvents: [],
	eventModalToggle: false,
	productModalToggle: false,
	reviewsPopUpToggle: false,
	selectedEventId: "",
	selectedProductId: "",
	selectedReviewId: "",
	selectedFolderId: "",
	headerLogoState: "normal",
	showNewsletter: window.matchMedia("(max-device-width: 480px)").matches
		? false
		: true,
	currentOption: "all",
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

		case "SET_LOGO_TYPE":
			console.log("State Changed");
			return {
				...state,
				headerLogoState: action.payload,
			};

		case "TOGGLE_NEWSLETTER":
			return {
				...state,
				showNewsletter: action.payload,
			};

		case "SET_MODAL_STATE":
			console.log("State Switched");

			return {
				...state,
				eventModalToggle: action.payload,
			};

		case "SET_REVIEWS_POPUP_STATE":
			console.log("State Switched");

			return {
				...state,
				reviewsPopUpToggle: action.payload,
			};

		case "SET_CURRENT_OPTION":
			return {
				...state,
				currentOption: action.payload,
			};

		case "SET_USER":
			return {
				...state,
				user: action.payload,
			};
		case "SET_PRODUCT_MODAL_STATE":
			return {
				...state,
				productModalToggle: action.payload,
			};

		case "SET_SELECTED_EVENT_ID":
			return {
				...state,
				selectedEventId: action.payload,
			};

		case "SET_SELECTED_REVIEW_ID":
			return {
				...state,
				selectedReviewId: action.payload,
			};

		case "SET_FOLDER_ID":
			return {
				...state,
				selectedFolderId: action.payload,
			};

		case "SET_SELECTED_PRODUCT_ID":
			return {
				...state,
				selectedProductId: action.payload,
			};

		case "UPDATE_UPCOMING_EVENTS":
			return {
				...state,
				upcomingEvents: action.payload,
			};

		case "UPDATE_REVIEWS":
			return {
				...state,
				cmsData: {
					...state.cmsData,
					data: {
						...state.cmsData.data,
						reviews: action.payload,
					},
				},
			};

		// return {
		// 	...state,
		// 	cmsData: {
		// 		...state.cmsData,
		// 		data: {
		// 			...state.cmsData.data,
		// 			upcomingEvents: action.payload,
		// 		},
		// 	},
		// };

		case "FETCHING":
			return {
				...state,
				cmsData: {
					status: "fetching",
				},
			};

		case "FETCHED":
			return {
				...state,
				cmsData: {
					status: "fetched",
					data: action.payload,
				},
			};

		case "FETCH_ERROR":
			return {
				...state,
				status: "error",
				error: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
