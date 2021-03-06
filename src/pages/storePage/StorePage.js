import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";
import FeaturedProducts from "./FeaturedProducts";
import WhiteFooter from "../../components/WhiteFooter";
import { useStateValue } from "../../Store/StateProvider";
import HeroSection from "./HeroSection";

function StorePage() {
	const [{ cmsData }, dispatch] = useStateValue();
	const [data, setData] = useState([]);
	const [isMobile, setIsMobile] = useState();

	useEffect(() => {
		setIsMobile(window.matchMedia("(max-device-width: 480px)").matches);
	}, []);

	useEffect(() => {
		if (cmsData.status === "fetched") {
			setData(cmsData.data.products);
		}
	}, [cmsData]);

	return (
		<HomePageWrapper
			id="main_app"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			key={1}
		>
			<HeroSection />
			{cmsData.status === "fetched" && data.length !== 0 ? (
				data.map((eachProduct) => {
					if (eachProduct.productDisplayType === "right") {
						return (
							<>
								{isMobile ? (
									<ProductLeft info={eachProduct} />
								) : (
									<ProductRight info={eachProduct} />
								)}
							</>
						);
					} else if (eachProduct.productDisplayType === "left") {
						return <ProductLeft info={eachProduct} />;
					}
					return <></>;
				})
			) : (
				<></>
			)}
			<FeaturedProducts />
			<WhiteFooter />
		</HomePageWrapper>
	);
}

export default StorePage;

const HomePageWrapper = styled(motion.div)`
	z-index: 49;
	height: 100vh;
	width: 100%;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	overflow-y: scroll;
	overflow: overlay;
	background-color: white;

	pointer-events: all !important;
	user-select: text !important;
	--webkit-user-select: text !important;

	/* Style the scroll bar */
	&::-webkit-scrollbar {
		width: 0.6em;
	}

	&::-webkit-scrollbar-track {
		background: #cccccc;
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: #4b4b4b;
		border-radius: 4px;
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: #424242;
	}

	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
`;


