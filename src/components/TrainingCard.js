import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import LiveExpButton from "../components/Buttons/LiveExpButton";
import CurrencyFormat from "react-currency-format";
import CheckIcon from "@material-ui/icons/Check";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { IconButton } from "@material-ui/core";

function TrainingCard({ training }) {
	let {
		price,
		per,
		title,
		feature1,
		feature2,
		feature3,
		feature4,
	} = training;

	return (
		<Wrapper
			initial={{ scale: 1 }}
			whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.2, type: "tween", ease: "easeIn" }}
		>
			<div className="price__strip">
				<p className="price__amount">
					<CurrencyFormat
						value={price}
						displayType={"text"}
						thousandSeparator={true}
						prefix={"$"}
					/>
				</p>
				<p className="per__tag">/{per.toLowerCase()}</p>
			</div>
			<div className="title__strip">{title}</div>

			<div className="feature__strips">
				<div className="feature__strip">
					<CheckIcon className="tick_mark" />
					<p>{feature1}</p>
				</div>
				<div className="feature__strip">
					<CheckIcon className="tick_mark" />
					<p>{feature2}</p>
				</div>
				<div className="feature__strip">
					<CheckIcon className="tick_mark" />
					<p>{feature3}</p>
				</div>
				<div className="feature__strip">
					<CheckIcon className="tick_mark" />
					<p>{feature4}</p>
				</div>
			</div>

			<div className="add_to_cart_holder">
				<IconButton
					className="outer"
					color="secondary"
					aria-label="add to shopping cart"
				>
					<InfoOutlinedIcon className="icon" />
				</IconButton>
				<IconButton
					className="outer"
					color="secondary"
					aria-label="add to shopping cart"
				>
					<AddShoppingCartIcon className="icon" />
				</IconButton>
			</div>
		</Wrapper>
	);
}

export default TrainingCard;

const Wrapper = styled(motion.div)`
	height: 100%;
	width: 230px;
	background-color: rgba(219, 0, 0, 0.19);
	border: rgb(122, 0, 0) solid 1px;
	border-radius: 4px;

	margin-right: 10px;
	margin-left: 10px;

	font-family: "Spectral", sans-serif;
	color: var(--main-color-white);

	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	.price__strip {
		width: 100%;
		height: 35px;
		margin-top: 10px;

		display: flex;

		.price__amount {
			height: 100%;
			display: flex;
			align-items: center;

			font-size: 25px;
			font-weight: 600;

			margin-left: 20px;
		}

		.per__tag {
			height: 100%;
			display: flex;
			align-items: center;

			font-size: 13px;
			font-weight: 200;
			margin-left: 5px;
			margin-top: 2px;
		}
	}

	.title__strip {
		background-color: rgba(219, 0, 0, 0.07);
		height: 38px;
		width: 100%;
		margin-bottom: 10px;
		margin-top: 10px;

		display: flex;
		align-items: center;

		padding-left: 20px;

		font-size: 16px;
		font-weight: 300;
	}

	.feature__strips {
		display: flex;
		flex-direction: column;
		align-items: center;

		padding-left: 20px;

		width: 100%;
		height: auto;

		.feature__strip {
			height: 30px;
			width: 100%;
			margin-bottom: 10px;

			display: flex;
			align-items: center;

			.tick_mark {
				font-size: 20px !important;
			}

			p {
				margin-left: 10px;
				font-size: 15px;
				font-weight: 200;
			}
		}
	}

	.add_to_cart_holder {
		height: 50px;
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: flex-end;

		.outer {
			.icon {
				color: #ffffff78 !important;
				font-size: 18px !important;
				transition: 0.2s ease-in;
			}

			&:hover {
				color: #ffffff !important;
				.icon {
					color: #ffffff !important;
					font-size: 18px !important;
					transition: 0.2s ease-in;
				}
			}
		}

		padding-right: 5px;
	}

	overflow: hidden;
`;
