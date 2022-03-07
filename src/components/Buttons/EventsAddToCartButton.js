import React from "react";
import styled from "styled-components";


function EventsAddToCartButton({ url }) {
	// const [didHover, setDidHover] = useState(false);

	const navigate = () => {
		window.location.href = url;
	};

	return (
		<ButtonWrapper onClick={navigate}>
			<button className="btn btn-1">
				<span>Explore</span>
			</button>
		</ButtonWrapper>
	);
}

export default EventsAddToCartButton;

const ButtonWrapper = styled.div`
	background-color: transparent;
	border: none;

	.btn {
		border: none;
		font-family: "GothamBook", sans-serif;
		font-size: 13px;
		cursor: pointer;
		padding: 13px 40px;
		display: inline-block;
		text-transform: uppercase;
		letter-spacing: 1px;
		outline: none;
		position: relative;
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
		border: 1px solid black;
		overflow: hidden;
		background: transparent;
		color: black;
	}

	.btn span {
		letter-spacing: 3px;
		font-size: 12px;
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
		color: white;
		background: #000;
		border: 1px solid white;
	}
`;
