import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router";
import { useStateValue } from "../../Store/StateProvider";

function ApplyNowButton() {
	const history = useHistory();
	const [{ headerLogoState }, dispatch] = useStateValue();

	const changePage = () => {
		dispatch({
			type: "SET_LOGO_TYPE",
			payload: "jumpback",
		});

		history.push("/live-experiences");
	};

	return (
		<ButtonWrapper>
			<button onClick={changePage} className="btn btn-1">
				<span>Explore</span>
			</button>
		</ButtonWrapper>
	);
}

export default ApplyNowButton;

const ButtonWrapper = styled.div`
	background-color: transparent;
	border: none;

	.btn {
		border: none;

		font-family: "GothamBook", sans-serif;
		font-size: 10px;

		color: inherit;
		cursor: pointer;
		padding: 13px 20px;
		display: inline-block;
		text-transform: uppercase;
		letter-spacing: 1px;
		outline: none;
		position: relative;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;

		/* border: 1px solid transparent; */

		border: 1px solid var(--main-color-white);

		color: var(--main-color-white);
		overflow: hidden;
		background: transparent;

		border-style: inset;
	}

	.btn span {
		letter-spacing: 3px;
	}

	.btn:after {
		content: "";
		position: absolute;
		z-index: -1;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
	}

	/* Button 1 */
	.btn-1:hover,
	.btn-1:active {
		/* font-family: "GothamBook", sans-serif; */
		color: black;
		background: #fff;
		border: 1px solid white;
	}

	@media only screen and (max-device-width: 480px) {
		.btn {
			background-color: white;
			color: black;

			font-family: "GothamMedium", sans-serif;
			font-size: 9px;
			span {
				letter-spacing: 2px;
			}
		}
	}
`;
