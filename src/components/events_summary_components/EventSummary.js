import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Date from "./Date";
import Title from "./Title";
import Location from "./Location";
import Price from "./Price";
import SummaryButton from "../Buttons/SummaryButton";
import { motion } from "framer-motion";

function EventSummary({ event, setShowEventsModal }) {
	const [isMobile, setIsMobile] = useState();

	useEffect(() => {
		setIsMobile(window.matchMedia("(max-device-width: 480px)").matches);
	}, []);

	let {
		heading,
		description,
		location,
		pricePerPerson,
		startDate,
		endDate,
		spotsAvailable,
		id,
		locationName,
	} = event;

	const date = {
		startDate: {
			day:
				String(startDate.getDate()).length === 1
					? "0" + String(startDate.getDate())
					: String(startDate.getDate()),
			month: startDate.toLocaleString("en-us", { month: "short" }),
			year: String(startDate.getFullYear()),
		},
		endDate: {
			day:
				String(endDate.getDate()).length === 1
					? "0" + String(endDate.getDate())
					: String(endDate.getDate()),
			month: endDate.toLocaleString("en-us", { month: "short" }),
			year: String(endDate.getFullYear()),
		},
	};

	return (
		<Wrapper
			initial={{ skewX: 20, y: -10, opacity: 0 }}
			animate={{ skewX: 0, y: 0, opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
		>
			{isMobile ? (
				<>
					<div class="inline-one-container">
						<DateHolder>
							<Date
								start={date.startDate.day}
								end={date.endDate.day}
								month={date.startDate.month}
							/>
						</DateHolder>
						<TitleHolder>
							<Title text={heading} />
						</TitleHolder>
					</div>
					<div className="inline-container">
						<LocationHolder>
							<Location location={locationName} />
						</LocationHolder>
						<PriceTag>
							<Price price={pricePerPerson} />
						</PriceTag>
					</div>
				</>
			) : (
				<>
					<DateHolder>
						<Date
							start={date.startDate.day}
							end={date.endDate.day}
							month={date.startDate.month}
						/>
					</DateHolder>
					<TitleHolder>
						<Title text={heading} />
					</TitleHolder>
					<LocationHolder>
						<Location location={locationName} />
					</LocationHolder>
					<PriceTag>
						<Price price={pricePerPerson} />
					</PriceTag>
				</>
			)}
			<ButtonHolder>
				<SummaryButton
					setShowEventsModal={setShowEventsModal}
					id={id}
				/>
			</ButtonHolder>
		</Wrapper>
	);
}

export default EventSummary;

const Wrapper = styled(motion.div)`
	height: 50px;
	width: 100%;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;

	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	box-shadow: 0px 0px 6px 0px rgba(204, 20, 20, 0.29);
	background-color: rgba(45, 1, 1, 0.29);
	overflow: hidden;
	border-radius: 10px;
	border: 1px solid #d70909;

	margin-bottom: 20px;

	@media only screen and (max-device-width: 480px) {
		height: 160px;
		width: 100%;

		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;

		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		.inline-one-container {
			display: flex;
			align-items: center;
			flex-direction: row-reverse;
			padding-top: 10px;
			padding-right: 20px;
			margin-bottom: 20px;
		}

		.inline-container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: -5px;
			margin-bottom: -20px;
			width: 100%;
			padding-right: 20px;
		}
	}
`;

const DateHolder = styled.div`
	height: 100%;
	width: 8%;

	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media only screen and (max-device-width: 480px) {
		width: 30%;
	}
`;

const TitleHolder = styled.div`
	height: 100%;
	flex-grow: 1;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;

	@media only screen and (max-device-width: 480px) {
		/* width: 100%; */
		justify-content: center;

		width: 70%;
	}
`;

const LocationHolder = styled.div`
	height: 100%;
	width: 22%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;

	@media only screen and (max-device-width: 480px) {
		width: auto;
	}
`;

const PriceTag = styled.div`
	height: 100%;
	width: 12%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;

	@media only screen and (max-device-width: 480px) {
		width: auto;
	}
`;

const ButtonHolder = styled.div`
	height: 100%;
	width: 14%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (max-device-width: 480px) {
		width: 100%;
		margin-top: 20px;
	}
`;
