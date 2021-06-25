import React from "react";
import SocialIconsHeader from "./Buttons/SocialIconsHeader";
import MenuButton from "./Buttons/MenuButton";
import UserHeaderButton from "./Buttons/UserHeaderButton";
import ScrollUpButton from "./Buttons/ScrollUpButton";
import ShoppingCartButton from "./Buttons/ShoppingCartButton";
import ApplyNowButton from "./Buttons/ApplyNowButton";
import Logo from "./Logo";

import styled from "styled-components";

function ComponentsTestScreen() {
	return (
		<ComponentCheck>
			<div className="items">
				{/* <MenuButton /> */}
				<Logo />
				<SocialIconsHeader type="facebook" />
				<SocialIconsHeader type="twitter" />
				<SocialIconsHeader type="instagram" />
				<MenuButton />
				<UserHeaderButton />
				<ScrollUpButton />
				<ShoppingCartButton />
				<ApplyNowButton />
			</div>
		</ComponentCheck>
	);
}

export default ComponentsTestScreen;

const ComponentCheck = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	.items {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		gap: 20px;
		align-items: center;
		width: 100%;
		height: auto;
		padding: 30px;

		background-color: var(--main-color-transparent-red);

		-webkit-flex-wrap: wrap;
		flex-wrap: wrap;
	}
`;
