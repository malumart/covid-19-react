import React from "react";
import styled from "styled-components";

const ContainerCards = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: grey;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 30px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

	.infected {
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

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	return (
		<ContainerCards>
			<Card>
				<div className="infected">
					<h4> Confirmed: {confirmed.value.toLocaleString()} </h4>
					<h6>Number of infected cases of COVID-19 </h6>
					<p> {new Date(lastUpdate).toDateString()} </p>
				</div>
			</Card>

			<Card>
				<div className="recovered">
					<h4> Recovered : {recovered.value.toLocaleString()} </h4>
					<h6>Number of recovered cases of COVID-19 </h6>
					<p> {new Date(lastUpdate).toDateString()} </p>
				</div>
			</Card>

			<Card>
				<div className="deaths">
					<h4> Deaths: {deaths.value.toLocaleString()} </h4>
					<h6>Number of deaths caused by COVID-19 </h6>
					<p> {new Date(lastUpdate).toDateString()} </p>
				</div>
			</Card>
		</ContainerCards>
	);
};

export default Cards;
