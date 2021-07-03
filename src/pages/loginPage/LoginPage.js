import React, { useState, useEffect } from "react";
import styled from "styled-components";

function LoginPage() {
	return (
		<HomePageWrapper id="main_app">
			<h1>Login Page</h1>
		</HomePageWrapper>
	);
}

export default LoginPage;

const HomePageWrapper = styled.div`
	z-index: 49;
	height: 100vh;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	overflow-y: scroll;
	overflow: overlay;
	background-color: black;

	/* Style the scroll bar */
	&::-webkit-scrollbar {
		width: 0.3em;
	}

	&::-webkit-scrollbar-track {
		background: var(--scrollbar-background-color);
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: var(--scrollbar-handle-color);
		border-radius: 4px;
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: var(--scrollbar-handle-hover-color);
	}

	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;

	h1 {
		position: absolute;

		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}
`;
