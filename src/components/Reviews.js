import React from "react";
import styled from "styled-components";
import EachReview from "./EachReview";

function Reviews({ currentFolder }) {
	const reviews = [
		{
			name: "Skye Gale",
			profile_photo:
				"https://static.wixstatic.com/media/7687a8_17e5e44d40ef4e3a978715f32cd9347b~mv2.jpg/v1/fill/w_640,h_1022,al_c,q_85,usm_0.66_1.00_0.01/7687a8_17e5e44d40ef4e3a978715f32cd9347b~mv2.webp",
			quote: "“Hitler as “the only man who can save us,”",
			full_review: "",
		},
		{
			name: "Emma",
			profile_photo:
				"https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
			quote:
				"We're separated as of this moment. We separate about every moon phase. It hasn't been your everyday Debbie Reynolds romance.",
			full_review: "",
		},
		{
			name: "Charlotte",
			profile_photo:
				"https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			quote: "Heroin possesses no negative qualities. You Asshole.",
			full_review: "",
		},
		{
			name: "Amelia",
			profile_photo:
				"https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			quote:
				"There’s no way Suzy would have ever broken DB’s strict “no dating” rule – in this industry, illicit drugs are more believable than an illicit boyfriend.",
			full_review: "",
		},
		{
			name: "Isabella",
			profile_photo:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTygPqsy9wYNkSoVnofhH_5cIgJzXab9-LDnA&usqp=CAU",
			quote:
				"In the summer, trainees gather for yoga and Pilates on the rooftop garden, fighting over the coveted umbrella-covered spots to avoid even the hint of a sun blemish.",
			full_review: "",
		},
		{
			name: "Neha",
			profile_photo:
				"https://www.bigstockphoto.com/images/homepage/collections2020/module-4.jpg",
			quote:
				"How can we know what forgiveness is until we have been utterly broken by our sin?",
			full_review: "",
		},
		{
			name: "Arica John",
			profile_photo:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWo8qqspI_psTddwBDtlZM9c8zxfa90drBXA&usqp=CAU",
			quote:
				"Enduring suffering can become a gift because it is an opportunity for us to grow from who we are into who God intends for us to become.",
			full_review: "",
		},
		{
			name: "Aela",
			profile_photo:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceEAw-QTqTijjtcFD3AcaVSy1qI_W3H_D3Q&usqp=CAU",
			quote:
				"Believe it or not, if you concentrate on finding the good in people, it’s easier than finding the evil.",
			full_review: "",
		},
	];

	return (
		<ReviewWrapper>
			{reviews.map((eachReview) => (
				<EachReview details={eachReview} />
			))}
		</ReviewWrapper>
	);
}

export default Reviews;

const ReviewWrapper = styled.div`
	height: 350px;
	width: 90vw;

	margin-top: 30px;
	max-width: 1000px;

	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	align-content: flex-start;
	gap: 10px;
	flex-wrap: wrap;
	overflow-y: scroll;

	padding-right: 10px;
	padding-left: 10px;

	/* Style the scroll bar */
	&::-webkit-scrollbar {
		width: 0.6em;
	}

	&::-webkit-scrollbar-track {
		background: var(--scrollbar-background-color);
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: var(--scrollbar-handle-color);
		border-radius: 4px;
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: var(--scrollbar-handle-hover-color);
	}
`;
