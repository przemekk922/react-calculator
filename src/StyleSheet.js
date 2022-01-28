import styled from "styled-components";

export const ReactCalculator = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	background: linear-gradient(
		6deg,
		rgba(21, 21, 23, 1) 0%,
		rgba(61, 58, 66, 1) 50%,
		rgba(21, 21, 23, 1) 100%
	);
`;

export const Title = styled.h1`
	padding-bottom: 30px;
	text-align: center;
	font-family: "ZCOOL QingKe HuangYou";
	font-size: 4.5em;
	letter-spacing: 6px;
	color: rgba(255, 140, 99, 0.8);
`;
export const Wrapper = styled.div`
	width: 650px;
	height: 650px;
	border-radius: 1.5rem;
	padding: 0;
	margin: 0;
`;
export const Screen = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	height: 20%;
	border-radius: 1.5rem 1.5rem 0 0;
	background: linear-gradient(
		6deg,
		rgba(21, 21, 23, 1) 0%,
		rgba(61, 58, 66, 1) 50%,
		rgba(21, 21, 23, 1) 100%
	);
	padding: 10px 15px 10px 15px;
	color: gainsboro;
	word-wrap: break-word;
	word-break: break-all;
	border: 15px solid lightgray;
	font-family: "ZCOOL QingKe HuangYou";
	letter-spacing: 5px;
`;

export const PreviousOperationScreen = styled.p`
	font-size: 2rem;
	padding: 0;
	margin: 0;
`;

export const CurrentOperationScreen = styled.p`
	font-size: 4rem;
	padding: 0;
	margin: 0;
`;

export const Keyboard = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 25%);
	grid-template-rows: repeat(5, 20%);
	height: 75%;
`;

export const StyledKeyboardBtn = styled.button`
	font-size: 3.5rem;
	font-family: "ZCOOL QingKe HuangYou";
	font-weight: 200;
	border: 1px solid silver;
	color: darkslategray;
	&:hover {
		background-color: lightgray;
	}
	&:active {
		box-shadow: inset 0px 0px 6px 2px rgba(134, 135, 148, 1);
	}
	&.StyledKeyboardBtn-equal {
		border-radius: 0 0 1.5rem 0;
		grid-row: span 2;
		background: linear-gradient(to top, rgb(248, 91, 74), rgb(255, 140, 99));
	}
	&.StyledKeyboardBtn-equal:hover {
		background: linear-gradient(
			to top,
			rgba(255, 141, 99, 0.8),
			rgba(248, 91, 74, 0.8)
		);
	}
	&.StyledKeyboardBtn-zero {
		border-radius: 0 0 0 1.5rem;
	}
	&.StyledKeyboardBtn-multi {
		font-weight: bolder;
		font-size: 2.5rem;
	}
`;
