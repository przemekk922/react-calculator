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
	font-size: 3.5em;
	text-align: center;
	color: rgba(255, 140, 99, 0.8);
	padding-bottom: 50px;
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
	color: whitesmoke;
	word-wrap: break-word;
	word-break: break-all;
	border: 15px solid lightgray;
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
// export const KeyboardBtn = ({ value, children, onClick, className }) => {
// 		return (
// 			<StyledKeyboardBtn
// 				className={className}
// 				value={value}
// 				onClick={() => {
// 					value === "+" || value === "−" || value === "✕" || value === "÷"
// 						? operatorClickHandler(value)
// 						: value === "⌫"
// 						? backspaceClickHandler()
// 						: value === "="
// 						? equalsClickHandler(value)
// 						: value === "CE"
// 						? clearEntryClickHandler()
// 						: value === "AC"
// 						? allClearClickHandler()
// 						: numberClickHandler(value);
// 				}}
// 			>
// 				{value}
// 			</StyledKeyboardBtn>
// 		);
// 	};

export const StyledKeyboardBtn = styled.button`
	font-size: 2.5rem;
	font-family: Verdana, Tahoma, sans-serif;
	font-weight: 200;
	border: 1px solid silver;
	color: darkslategray;
	&:hover {
		background-color: lightgray;
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
`;
