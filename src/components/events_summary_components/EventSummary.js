import React, { useEffect } from "react";
import styled from "styled-components";
import Date from "./Date";
import Title from "./Title";
import Location from "./Location";
import Price from "./Price";
import SummaryButton from "../Buttons/SummaryButton";
import { motion } from "framer-motion";

function EventSummary({ event, setShowEventsModal }) {
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

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	box-shadow: 0px 0px 6px 0px rgba(204, 20, 20, 0.29);
	background-color: rgba(45, 1, 1, 0.29);
	overflow: hidden;
	border-radius: 10px;
	border: 1px solid #d70909;

	margin-bottom: 9px;
`;

const DateHolder = styled.div`
	height: 100%;
	width: 8%;

	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const TitleHolder = styled.div`
	height: 100%;
	flex-grow: 1;
	display: flex;
	align-items: center;

`;

const LocationHolder = styled.div`
	height: 100%;
	width: 22%;
	display: flex;
	align-items: center;
`;

const PriceTag = styled.div`
	height: 100%;
	width: 12%;
	display: flex;
	align-items: center;
`;

const ButtonHolder = styled.div`
	height: 100%;
	width: 14%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
