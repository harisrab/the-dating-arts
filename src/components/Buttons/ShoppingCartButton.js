import React from "react";
import { Frame, AnimatePresence } from "framer";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useStateValue } from "../../Store/StateProvider";
import { getNumberOfBasketItems } from "../../Store/reducer";
import { useLocation, useHistory } from "react-router-dom";

const variants = {
	initial: {
		width: 45,
		height: 45,
		overflow: "visible",
		backgroundColor: "#ffffff0",
		border: "1px solid #e6e6e6",
		shadow: "0px 0px 5px 0px #e6e6e6",
	},
	hover: {
		transition: { duration: 0.2, type: "tween" },
		cursor: "pointer",
		shadow: "0px 0px 8px 0px #e6e6e6",
	},
	tap: {
		shadow: "0px 0px 12px 0px #e6e6e6",
		transition: { duration: 0.2, type: "tween" },
	},
};

const overlayVariants = {
	initial: {
		opacity: 0,
		height: "0%",
		width: "100%",
		positon: "absolute",
		top: 0,
		left: 0,
		backgroundColor: "blue",
		zIndex: 100,
	},
	final: {
		opacity: 1,
		height: "100%",
	},
};

function ShoppingCartButton({ value = 0 }) {
	const [{ basket }, dispatch] = useStateValue();
	const location = useLocation();
	const history = useHistory();

	let basketValue = getNumberOfBasketItems(basket);

	const moveToCheckout = () => {
		// do some fancy page switching
		history.push("/checkout");
	};

	return (
		<Frame
			variants={variants}
			initial={"initial"}
			whileHover={"hover"}
			whileTap={"tap"}
			onClick={moveToCheckout}
		>
			<AnimatePresence>
				{/* render this only when at the checkout page or payment page */}
				{(location.pathname === "/checkout" ||
					location.pathname === "/payment") && (
					<Frame
						variants={overlayVariants}
						position={"absolute"}
						inital={"initial"}
						animate={"final"}
						transition={{ type: "tween", duration: 0.8 }}
						ease={"easeIn"}
						height={0}
						width={"100%"}
						backgroundColor={"var(--main-color-red)"}
						style={{
							zIndex: 100,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							paddingBottom: 2,
							color: "var(--main-color-white)",
							overflow: "hidden",
						}}
					>
						<p
							style={{
								position: "absolute",
							}}
						>
							{basketValue}
						</p>
					</Frame>
				)}

				<Frame
					key={55}
					height={24}
					width={24}
					position="absolute"
					top={10}
					left={10}
					backgroundColor="none"
					transition={{ type: "tween", duration: 0.2 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
				>
					<ShoppingCartOutlinedIcon style={{ color: "white" }} />
					<ItemsIndicator>
						<p>{basketValue}</p>
					</ItemsIndicator>
				</Frame>
			</AnimatePresence>
		</Frame>
	);
}

export default ShoppingCartButton;

const ItemsIndicator = styled.div`
	position: absolute;
	height: 19px;
	width: 19px;
	background-color: var(--main-color-red);
	border-radius: 50%;
	top: -3px;
	right: -3px;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

	display: flex;
	align-items: center;
	justify-content: center;

	p {
		color: var(--main-color-white);
		font-size: 10px;
		padding: 0px;
		margin-bottom: 1px;
	}
`;
