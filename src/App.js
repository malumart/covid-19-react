import React, { useState, useEffect } from "react";
import covidimage from "./img/covidimage.png";
import CountryDropdown from "./components/CountryDropdown";
import Cards from "./components/Cards";
import styled from "styled-components";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

const ImgTitle = styled.div`
	margin: 30px;
	display: flex;
	justify-content: center;
	img {
		height: 80px;
	}
`;

const App = () => {
	const [chosenCountry, setChosenCountry] = useState("global");
	const [dataCountry, setDataCountry] = useState("");

	const handleChange = (e) => {
		console.log(e.target.value); // no esta logueando nada
		setChosenCountry(e.target.value);
	};

	useEffect(() => {
		(chosenCountry == "global"
			? fetch("https://covid19.mathdro.id/api")
			: fetch(`https://covid19.mathdro.id/api/countries/${chosenCountry}`)
		)
			.then((res) => res.json())
			.then((data) => setDataCountry(data));
	}, [chosenCountry]);

	console.log(dataCountry);

	return (
		<div className="App">
			<ImgTitle>
				<img src={covidimage} alt="COVID-19" />
			</ImgTitle>
			<CountryDropdown onChange={handleChange} />
			{dataCountry && <Cards data={dataCountry} />}
		</div>
	);
};

export default App;
