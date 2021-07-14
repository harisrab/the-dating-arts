import React from "react";
import styled from "styled-components";

function EventsModalFooter() {
	return <Wrapper></Wrapper>;
}

export default EventsModalFooter;

const Wrapper = styled.div`
	height: 10%;
	width: 100%;

	@media only screen and (max-device-width: 480px) {
		height: 3%;

	}
`;