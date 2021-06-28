import React from "react";
import styled from "styled-components";
import DASlider from "./DASlider";

function EventsModalContent({
	url = "https://images.unsplash.com/photo-1504704911898-68304a7d2807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
}) {
	const handleSliderChange = (e) => {
		console.log(e.target);
	};
	return (
		<Wrapper>
			<BackStrip></BackStrip>
			<ImageContainer src={url} alt="image"></ImageContainer>

			<Right>
				<Heading>
					<h2>3 Days Express Online Bootcamp</h2>
				</Heading>
				<Description>
					<p>
						Here's to the crazy ones. The misfits. The rebels. The
						troublemakers. The round pegs in the square holes. The
						ones who see things differently. They're not fond of
						rules. And they have no respect for the status quo. You
						can quote them, disagree with them, glorify or vilify
						them.{" "}
					</p>
				</Description>

				<Location>
					{" "}
					<p>
						<b>Location: </b>
						<a href="#">Miami, LF USA</a>
					</p>
				</Location>
				<Availability></Availability>

				<DASlider
					defaultValue={2}
					marks={true}
					valueLabelDisplay="auto"
					step={1}
					min={0}
					max={10}
					onChange={handleSliderChange}
				/>
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
	/* background-color: blue; */

	margin-left: 80px;
	margin-right: 80px;
`;

const Heading = styled.div`
	background-color: yellow;
`;

const Description = styled.div`
	background-color: #00ff2a;
`;

const Location = styled.div`
	background-color: #00f7ff;
	margin-bottom: 150px;
`;

const Availability = styled.div`
	margin-top: 30px;
	background-color: #8400ff;
`;
