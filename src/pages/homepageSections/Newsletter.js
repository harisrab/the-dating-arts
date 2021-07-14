import React from "react";
import styled from "styled-components";
import AnimatedDownArrow from "../../components/AnimatedDownArrow";
import EmailIcon from "@material-ui/icons/Email";
import SubscribeButton from "../../components/Buttons/SubscribeButton";

function Newsletter() {
	return (
		<Wrapper>
			<NewsletterWrapper>
				<TextContainer>
					<p>Subscribe to</p>
					<h3>
						The Dating <span>Arts</span> Newsletter
					</h3>
					<p className="blurb">
						Get the lastest news and stories delivered to your inbox
					</p>
				</TextContainer>
				<FunctionalContainer>
					<form>
						<input className="input__box" type="text" />
						<EmailIcon className="icon" />
						<SubscribeButton />
					</form>
				</FunctionalContainer>
			</NewsletterWrapper>

			<AnimatedDownArrow />
		</Wrapper>
	);
}

export default Newsletter;

const Wrapper = styled.div`
	overflow: hidden;

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

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const NewsletterWrapper = styled.div`
	width: 80%;
	height: 120px;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
`;

const TextContainer = styled.div`
	height: 100%;
	width: auto;
	padding-left: 10px;
	padding-right: 10px;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	justify-content: center;

	font-family: "Spectral", sans-serif;

	color: var(--main-color-white);

	p {
		font-weight: 200;
		font-size: 15px;
	}

	h3 {
		font-weight: 400;
		font-size: 31.5px;

		span {
			color: var(--main-color-red);
		}
	}

	.blurb {
		font-size: 16.5px;
		opacity: 0.8;
		margin-top: -5px;
	}
`;

const FunctionalContainer = styled.div`
	height: 100%;
	flex-grow: 1;
	/* background-color: #9900ff47; */

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: flex-end;
	form {
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		width: 100%;
		margin-bottom: 22px;

		position: relative;

		.icon {
			position: absolute;
			top: 50%;
			left: 35px;
			transform: translateY(-50%);
			font-size: 18px;
			color: #ffffffbc;
		}

		.input__box {
			flex-grow: 1;
			margin-right: 10px;
			margin-left: 20px;
			background-color: transparent;

			border: 1px solid white;

			color: white;

			padding-left: 50px;
			font-size: 15px;
			font-family: "Spectral", sans-serif;
			font-weight: 200;
		}
	}
`;
