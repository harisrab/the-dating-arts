import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import { useStateValue } from "../../../Store/StateProvider";

function EventsModalHeader() {
	const [{ eventModalToggle }, dispatch] = useStateValue();

	const ToggleModal = () => {
		dispatch({
			type: "SET_MODAL_STATE",
			payload: false,
		});

		dispatch({
			type: "SET_SELECTED_EVENT_ID",
			payload: "",
		});
	};
	return (
		<Wrapper>
			<div className="exit__button" onClick={ToggleModal}>
				<IconButton>
					<CloseIcon />
				</IconButton>
			</div>
		</Wrapper>
	);
}

export default EventsModalHeader;

const Wrapper = styled.div`
	height: 10%;
	width: 100%;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	.exit__button {
		height: 6vh;
		width: 6vh;
		margin-right: 8px;
		background-color: white;

		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			cursor: pointer;
		}
	}
`;
