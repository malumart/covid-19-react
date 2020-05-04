import React from "react";
import styled from "styled-components";

const CardDetail = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 30px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

	.confirmed {
		border-bottom: 10px solid rgba(0, 0, 255, 0.5);
		padding: 20px;
		width: 200px;
		heigth: 400px;
	}

	.recovered {
		border-bottom: 10px solid rgba(0, 255, 0, 0.5);
		padding: 20px;
		width: 200px;
		heigth: 400px;
	}

	.deaths {
		border-bottom: 10px solid rgba(255, 0, 0, 0.5);
		padding: 20px;
		width: 200px;
		heigth: 400px;
	}

	p {
		color: #8a8a8a;
	}
`;

const Card = ({ typeString, type, lastUpdate }) => {
	const capitalizeFirstLetter = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	return (
		<CardDetail>
			<div className={typeString}>
				<h4>
					{capitalizeFirstLetter(`${typeString}`)} = {type.toLocaleString()}
				</h4>
				<h6>Number of {typeString} cases of COVID-19 </h6>
				<p> {new Date(lastUpdate).toDateString()} </p>
			</div>
		</CardDetail>
	);
};

export default Card;
