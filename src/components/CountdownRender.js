import React from "react";

function CountdownRender({ hours, minutes, seconds, completed }) {
	if (completed) {
		// Render a completed state
		return <h1>Counter not working</h1>;
	} else {
		// Render a countdown
		return (
			<span>
				{hours}:{minutes}:{seconds}
			</span>
		);
	}
}

export default CountdownRender;
