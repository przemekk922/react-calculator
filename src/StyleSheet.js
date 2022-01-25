import styled from "styled-components";

export const ReactCalculator = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* background-color: #48b8ae; */
	height: 100vh;
	background: linear-gradient(
		6deg,
		rgba(21, 21, 23, 1) 0%,
		rgba(61, 58, 66, 1) 50%,
		rgba(21, 21, 23, 1) 100%
	);
`;

export const Title = styled.h1`
	font-size: 3.5em;
	text-align: center;
	color: rgba(255, 140, 99, 0.8);
	padding-bottom: 50px;
`;
export const Wrapper = styled.div`
	width: 650px;
	height: 650px;
	border-radius: 1.5rem;
`;
export const Screen = styled.div`
	height: 25%;
	border-radius: 1.5rem 1.5rem 0 0;
	background: linear-gradient(
		6deg,
		rgba(21, 21, 23, 1) 0%,
		rgba(61, 58, 66, 1) 50%,
		rgba(21, 21, 23, 1) 100%
	);
	text-align: right;
	color: white;
	word-wrap: break-word;
	word-break: break-all;
	border: 5px solid lightgray;
`;

export const Keyboard = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 25%);
	grid-template-rows: repeat(5, 20%);
	height: 75%;
	border: none;
`;

export const KeyboardBtn = styled.button`
	font-size: 2.5rem;
	font-family: Verdana, Tahoma, sans-serif;
	font-weight: 200;
	border: 1px solid silver;
	color: darkslategray;
	&:hover {
		background-color: lightgray;
	}
	&.KeyboardBtn-equal {
		border-radius: 0 0 1.5rem 0;
		grid-row: span 4;
		background: linear-gradient(to top, rgb(248, 91, 74), rgb(255, 140, 99));
	}
	&.KeyboardBtn-equal:hover {
		background: linear-gradient(
			to top,
			rgba(255, 141, 99, 0.8),
			rgba(248, 91, 74, 0.8)
		);
	}
	&.KeyboardBtn-zero {
		border-radius: 0 0 0 1.5rem;
	}
`;
