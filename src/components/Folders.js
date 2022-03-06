import styled from "styled-components";
import { useState, useEffect } from "react";

const Folders = ({
	selectedFolder,
	handleFolderSelection,
	shouldRender,
	setShouldRender,
}) => {
	const folders = [
		{
			title: "What others think of WEM?",
			code: "What_others_think_of_WEM",
		},
		{ title: "Results Bootcamp Reviews", code: "Results_Bootcamp_Reviews" },
		{ title: "Mastery 1-ON-1 Reviews", code: "Mastery_1_ON_1_Reviews" },
		{
			title: "Legends Immersion Reviews",
			code: "Legends_Immersion_Reviews",
		},
		{
			title: "Empower Video Consultation",
			code: "Empower_Video_Consultation",
		},
		{
			title: "CloseHerSchool Live Reviews",
			code: "CloseHerSchool_Live_Reviews",
		},
	];

	// Leakage Fixed

	const onAnimationEnd = () => {
		setShouldRender("exit");
	};
	return (
		<>
			{shouldRender === 0 && (
				<FoldersHolder
					style={{
						animation: `${
							selectedFolder === 0 ? "fadeIn" : "fadeOut"
						} 0.2s`,
					}}
					onAnimationEnd={selectedFolder !== 0 && onAnimationEnd}
				>
					{folders.map((eachTitle, i) => (
						<Folder
							key={i}
							onClick={handleFolderSelection}
							id={eachTitle.code}
						>
							<h3>{eachTitle.title}</h3>
						</Folder>
					))}
				</FoldersHolder>
			)}
		</>
	);
};

export default Folders;

const FoldersHolder = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	/* gap: 3px; */
	width: 80vw;

	transition: 1s ease-in-out;

	@media only screen and (max-device-width: 480px) {
		width: 100%;
	}
`;

const Folder = styled.div`
	box-sizing: border-box;
	padding-top: 8px;
	padding-bottom: 8px;

	margin-top: 2px;
	margin-bottom: 2px;

	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;

	border-bottom: 1px solid transparent;
	border-top: 1px solid transparent;

	transition: 0.8s;

	&:hover {
		border-top: 1px solid #ffffff3d;
		border-bottom: 1px solid #ffffff3d;

		/* transition: 0.3s ease-in-out; */
		cursor: pointer;

		/* transform: scaleY(1); */
		transition: 0.2s;
		transform-origin: bottom;
		background-color: #ffffff3d;
		background: linear-gradient(
			to right,
			transparent,
			#ffffff3d,
			transparent
		);
	}

	h3 {
		font-size: 16px;
		font-weight: 200;

		color: var(--main-color-white);
		font-family: "Spectral", sans-serif;
		font-style: normal;
		/* z-index: 2; */
		pointer-events: none;
	}
`;
