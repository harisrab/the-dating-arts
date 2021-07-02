import React from "react";
import styled from "styled-components";

function ModalDates({ startDate, endDate }) {
	return (
		<Wrapper>
			<div className="date__holder">
				<div className="tag">
					<p>Start</p>
				</div>
				<div className="date">
					<p>{startDate}</p>
				</div>
			</div>
			<div className="date__holder">
				<div className="tag">
					<p>End</p>
				</div>
				<div className="date">
					<p>{endDate}</p>
				</div>
			</div>
		</Wrapper>
	);
}

export default ModalDates;

const Wrapper = styled.div`
	height: 100%;
	width: 45%;
	margin-left: 70px;
	/* background-color: blue; */

	display: flex;
	justify-content: space-between;

	.date__holder {
		height: 100%;
		width: 100px;
		/* background-color: purple; */

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		color: white;

		.tag {
			font-weight: 700;
			font-size: 13px;
		}

		.date {
			font-weight: 300;
			font-size: 13px;
			opacity: 0.7;
		}
	}
`;
