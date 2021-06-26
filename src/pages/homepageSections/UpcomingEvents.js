import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";

function UpcomingEvents() {
	return (
		<Wrapper>
			<h1>Upcoming Events</h1>
			<AnimatedDownArrow />
		</Wrapper>
	);
}

export default UpcomingEvents;

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	flex-shrink: 0;

	background-image: url("homepage/generic_bg.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	position: relative;

	scroll-snap-align: start;

	h1 {
		color: white;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;
