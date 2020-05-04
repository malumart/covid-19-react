import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const ContainerCards = styled.section`
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: grey;
`;

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	return (
		<ContainerCards>
			<Card
				typeString="confirmed"
				type={confirmed.value}
				lastUpdate={lastUpdate}
			></Card>

			<Card
				typeString="recovered"
				type={recovered.value}
				lastUpdate={lastUpdate}
			></Card>

			<Card
				typeString="deaths"
				type={deaths.value}
				lastUpdate={lastUpdate}
			></Card>
		</ContainerCards>
	);
};

export default Cards;
