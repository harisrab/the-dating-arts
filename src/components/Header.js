import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { useHistory } from "react-router-dom";

import { useStateValue } from "../Store/StateProvider";

import { useAnimation } from "framer-motion";

// import buttons
import MenuButton from "./Buttons/MenuButton";
import UserHeaderButton from "./Buttons/UserHeaderButton";
import ShoppingCartButton from "./Buttons/ShoppingCartButton";
import SocialIconsHeader from "./Buttons/SocialIconsHeader";
import ScrollUpButton from "./Buttons/ScrollUpButton";
import MainMenu from "./MainMenu";

function Header() {
	const history = useHistory();

	return (
		<>
			<HeaderWrapper>
				<MainMenu />

				<TopSection>
					<LogoHolder>
						<Logo onClick={() => history.push("/")} />
					</LogoHolder>
					<RightSection>
						<MenuButton />
						<ShoppingCartButton />
						<UserHeaderButton />
					</RightSection>
				</TopSection>
				<BottomSection>
					<SocialIconsContainer>
						<SocialIconsHeader type="instagram" />
						<SocialIconsHeader type="facebook" />
						<SocialIconsHeader type="youtube" />
					</SocialIconsContainer>

					<ScrollHolder>
						<ScrollUpButton />
					</ScrollHolder>
				</BottomSection>
			</HeaderWrapper>
		</>
	);
}

export default Header;

const HeaderWrapper = styled.div`
	height: 86.94%;
	width: 89.37%;

	position: fixed;
	z-index: 50;

	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	pointer-events: none;

	/* --webkit-user-select: auto; */
`;

const TopSection = styled.div`
	width: 100%;
	height: 8%;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	pointer-events: "auto";
`;

const BottomSection = styled.div`
	width: 100%;
	height: 8%;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const LogoHolder = styled.div`
	height: 100%;
	flex: 1;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	pointer-events: "auto";
`;

const RightSection = styled.div`
	height: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	justify-content: space-between;
	/* gap: 18px; */
`;

const SocialIconsContainer = styled.div`
	height: 100%;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* gap: 18px; */
`;

const ScrollHolder = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	flex: 1;
	justify-content: flex-end;
`;
