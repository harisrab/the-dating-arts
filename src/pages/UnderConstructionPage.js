import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import CheckSection from "../components/CheckSection";
import MenuButton from "../components/MenuButton";

function UnderConstructionPage() {
	const [active, setActive] = useState(false);

	return (
		<PageWrapper>
			<Logo />
			<MenuButton active={active} setActive={setActive} />
			<MainContainer>
				<RightContainer>
					<h1>Under Construction</h1>
					<CheckPoints>
						<CheckSection
							text={"Complete Boilerplate Code and Deploy"}
							color={"red"}
						/>
						<CheckSection text={"Loader screen"} />
						<CheckSection
							text={"Layout and Design Static Pages in Code"}
						/>
						<CheckSection text={"Animate Page Transitions"} />
						<CheckSection
							text={"Design and Animate Micro Interactions"}
						/>
						<CheckSection text={"Program Dynamic Pages"} />
						<CheckSection
							text={"Design and Program E-commerce Page"}
						/>
						<CheckSection text={"Build User Login Feature"} />
						<CheckSection
							text={"Get Database Operational for User/Data"}
						/>
					</CheckPoints>
				</RightContainer>
			</MainContainer>
		</PageWrapper>
	);
}

export default UnderConstructionPage;

const PageWrapper = styled.div`
	height: 100%;
	width: 100%;

	background-color: #0a0a0a;

	position: relative;

	padding: 97px;
	padding-top: 79px;
	padding-bottom: 79px;

	@media (max-device-width: 480px) {
		height: 100%;
		width: 100%;

		background-color: #0a0a0a;

		position: relative;

		padding: 30px;
		padding-top: 120px;
		padding-bottom: 50px;
	}
`;

const MainContainer = styled.div`
	height: 100%;
	width: 100%;
	border-bottom: solid 1px;
	border-color: #13131367;

	@media (max-device-width: 480px) {
		height: 100%;

		width: 100%;
		border-bottom: solid 1px;
		border-color: #e6e6e667;
		padding-bottom: 20px;
	}
`;
const RightContainer = styled.div`
	margin-left: 236px;
	height: 100%;
	flex: 1;

	/* border-top: solid 1px;
	border-color: #e6e6e667; */

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	h1 {
		color: #e6e6e6;
		font-family: "Spectral", serif;
		font-weight: 600;
	}

	@media (max-device-width: 480px) {
		margin-left: 0px;
		height: 100%;
		flex: 1;

		border-top: solid 1px;
		border-color: #e6e6e667;

		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		flex-direction: column;

		h1 {
			color: #e6e6e6;
			font-family: "Spectral", serif;
			font-weight: 600;
			margin-top: 30px;
		}
	}
`;

const CheckPoints = styled.div`
	height: 100%;
	margin-left: 350px;
	flex: 1;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-device-width: 480px) {
		height: 100%;
		margin-left: 0px;
		flex: 1;
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;
