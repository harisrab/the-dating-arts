import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { useHistory } from "react-router-dom";

import { useStateValue } from "../Store/StateProvider";

// import buttons
import MenuButton from "./Buttons/MenuButton";
import SocialIconsHeader from "./Buttons/SocialIconsHeader";
import MainMenu from "./MainMenu";
import JumpBackBtn from "./JumpBackBtn";
import { log } from "firebase-functions/lib/logger";

const Header = function Header({ background = "black" }) {
	const history = useHistory();
	const [{ headerLogoState }, dispatch] = useStateValue();

	return (
		<>
			<HeaderWrapper>
				<MainMenu />

				<TopSection>
					{/* {strip ? <BackStrip /> : <></>} */}
					<BackStrip />
					<LogoHolder>
						{headerLogoState === "normal" && (
							<Logo
								background={background}
								onClick={() => history.push("/")}
							/>
						)}
						{headerLogoState === "jumpback" && <JumpBackBtn />}
					</LogoHolder>
					<RightSection>
						<MenuButton background={background} />
						{/* <ShoppingCartButton background={background} />
						<UserHeaderButton background={background} /> */}
					</RightSection>
				</TopSection>
				{/* <BottomSection>
					<SocialIconsContainer>
						<SocialIconsHeader
							type="instagram"
							background={background}
						/>
						<SocialIconsHeader
							type="facebook"
							background={background}
						/>
						<SocialIconsHeader
							type="youtube"
							background={background}
						/>
					</SocialIconsContainer>

					<div></div>
				</BottomSection> */}
			</HeaderWrapper>
		</>
	);
};

export default Header;

const HeaderWrapper = styled.div`
	height: 95%;
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
	overflow: visible;

	@media only screen and (max-device-width: 480px) {
		height: 95%;
		width: 85%;
	}
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

	position: relative;
`;

const BackStrip = styled.div`
	background-color: #0c0c0ded;

	position: absolute;

	top: 50%;
	left: 50%;

	transform: translate(-50%, -50%);

	width: 100vw;
	height: 110px;

	z-index: 0;

	/* box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
			rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
			rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px; */

	@media only screen and (max-device-width: 480px) {
		background-color: #000000d5;

		position: absolute;

		top: 50%;
		left: 50%;

		transform: translate(-50%, -50%);

		width: 100vw;
		height: 110px;

		z-index: 0;

		box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
			rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
			rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
	}
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

	@media only screen and (max-device-width: 480px) {
		z-index: 2;
	}
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

	@media only screen and (max-device-width: 480px) {
		display: none;
	}
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
