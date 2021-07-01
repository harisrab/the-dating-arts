import React from "react";
import styled from "styled-components";
import DASlider from "./DASlider";
import EventsAddToCartButton from "../../Buttons/EventsAddToCartButton";
import ModalPriceTag from "./ModalPriceTag";
import ModalDates from "./ModalDates";

function EventsModalContent({
	url = "https://images.unsplash.com/photo-1504704911898-68304a7d2807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
}) {
	const handleSliderChange = (e, val) => {
		console.log(e.target);
		console.log("Current Value ===>>", val);
	};
	return (
		<Wrapper>
			<BackStrip></BackStrip>
			<ImageContainer src={url} alt="image"></ImageContainer>

			<Right>
				<div className="upper">
					<div className="price__holder">
						<ModalPriceTag />
						<ModalDates />
					</div>
					<Heading>
						<h2>3 Days Express Online Bootcamp</h2>
					</Heading>
					<Description>
						<p>
							Here's to the crazy ones. The misfits. The rebels.
							The troublemakers. The round pegs in the square
							holes. The ones who see things differently. They're
							not fond of rules. And they have no respect for the
							status quo. You can quote them, disagree with them,
							glorify or vilify them.{" "}
						</p>
					</Description>

					<Location>
						{" "}
						<p>
							<b>Location: </b>
							<a href="#">Miami, LF USA</a>
						</p>
					</Location>
				</div>

				<div className="lower">
					<Availability>
						<p>
							<b>Availability:</b> 10
						</p>
					</Availability>

					<DASlider
						defaultValue={1}
						marks={true}
						step={1}
						min={0}
						max={10}
						onChange={handleSliderChange}
					/>

					<SaveSpots>
						Buy spots for <b>4</b> persons
					</SaveSpots>

					<EventsAddToCartButton style={{ color: "red" }} />
				</div>
			</Right>
		</Wrapper>
	);
}

export default EventsModalContent;

const Wrapper = styled.div`
	width: 100%;
	flex: 1;

	position: relative;

	display: flex;
	align-items: center;
`;

const BackStrip = styled.div`
	position: absolute;

	width: 100%;
	height: 15%;
	background-color: var(--main-color-light-black);
	top: 50%;
	transform: translate(0, -50%);
	z-index: -1;
`;

const ImageContainer = styled.img`
	height: 100%;
	width: 35%;
	background-color: red;
	margin-left: 6%;
	object-fit: cover;
`;

const Right = styled.div`
	height: 100%;
	flex: 1;

	margin-left: 80px;
	margin-right: 80px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	font-family: "Spectral", sans-serif;

	position: relative;

	.upper {
		height: 38%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
	}

	.lower {
		height: 38%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
	}

	.price__holder {
		position: absolute;
		width: 100%;
		height: 15%;
		background-color: red;

		top: 50%;
		transform: translate(0, -50%);
	}
`;

const Heading = styled.div`
	font-weight: 700;
	font-size: 18px;
`;

const Description = styled.div`
	font-weight: 300;
	font-size: 14px;
	line-height: 19.5px;
	opacity: 0.7;
`;

const Location = styled.div`
	b {
		font-weight: 600;
		margin-right: 5px;
	}

	a {
		color: black;
		font-weight: 200;
	}
`;

const Availability = styled.div`
	p {
		color: black;
		font-weight: 200;

		b {
			font-weight: 600;
			margin-right: 5px;
		}
	}
`;

const SaveSpots = styled.div`
	p {
		font-weight: 200;

		b {
			font-weight: 600;
		}
	}
`;
