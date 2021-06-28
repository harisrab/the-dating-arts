import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

function EventsModalHeader({ setShowEventsModal }) {
	return (
		<Wrapper>
			<div
				className="exit__button"
				onClick={() => setShowEventsModal(false)}
			>
				<CloseIcon />
			</div>
		</Wrapper>
	);
}

export default EventsModalHeader;

const Wrapper = styled.div`
	height: 10%;
	width: 100%;


	display: flex;
	justify-content: flex-end;
	align-items: center;

	.exit__button {
		height: 6vh;
		width: 6vh;
		margin-right: 8px;
		background-color: white;

		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			cursor: pointer;
		}
	}
`;
