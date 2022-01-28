import React, { useState } from "react";
import {
	ReactCalculator,
	Title,
	Wrapper,
	Screen,
	PreviousOperationScreen,
	CurrentOperationScreen,
	Keyboard,
	KeyboardBtn,
	StyledKeyboardBtn,
} from "./StyleSheet.js";

const Calculator = () => {
	let [operation, setOperation] = useState("");
	let [result, setResult] = useState("");

	const numberClickHandler = (value) => {
		if (operation.length > 15) {
			return;
		}
		if (value === ".") {
			if (operation.includes(".")) {
				return;
			}
		}
		setOperation(operation + value);
	};

	const backspaceClickHandler = () => {
		setOperation(operation.toString().slice(0, -1));
	};

	const clearEntryClickHandler = () => {
		setOperation((operation = ""));
	};

	const allClearClickHandler = () => {
		setOperation((operation = ""));
		setResult((result = ""));
	};

	const equalsClickHandler = (value) => {
		if (operation === "") {
			return;
		}
		setResult((result = result + " " + operation + " " + value));
		result.includes("+")
			? setOperation(parseFloat(result) + parseFloat(operation))
			: result.includes("−")
			? setOperation(parseFloat(result) - parseFloat(operation))
			: result.includes("✕")
			? setOperation(parseFloat(result) * parseFloat(operation))
			: setOperation(parseFloat(result) / parseFloat(operation));
	};

	const operatorClickHandler = (value) => {
		if (result.includes("+")) {
			equalsClickHandler(value);
			console.log(result);
		}
		if (operation === "") {
			operation = 0;
		}

		setResult((result = operation + " " + value));
		setOperation((operation = ""));
	};

	const KeyboardBtn = ({ value, children, onClick, className }) => {
		return (
			<StyledKeyboardBtn
				className={className}
				value={value}
				onClick={() => {
					value === "+" || value === "−" || value === "✕" || value === "÷"
						? operatorClickHandler(value)
						: value === "⌫"
						? backspaceClickHandler()
						: value === "="
						? equalsClickHandler(value)
						: value === "CE"
						? clearEntryClickHandler()
						: value === "AC"
						? allClearClickHandler()
						: numberClickHandler(value);
				}}
			>
				{value}
			</StyledKeyboardBtn>
		);
	};

	return (
		<ReactCalculator>
			<Title>React Calculator</Title>
			<Wrapper>
				<Screen>
					<PreviousOperationScreen>{result || ""}</PreviousOperationScreen>
					<CurrentOperationScreen>{operation || "0"}</CurrentOperationScreen>
				</Screen>
				<Keyboard>
					<KeyboardBtn value="&#43;" />
					<KeyboardBtn value="&#8722;" />
					<KeyboardBtn value="&#10005;" className={"StyledKeyboardBtn-multi"} />
					<KeyboardBtn value="&#247;" />
					<KeyboardBtn value="7" />
					<KeyboardBtn value="8" />
					<KeyboardBtn value="9" />
					<KeyboardBtn value="&#9003;" />
					<KeyboardBtn value="4" />
					<KeyboardBtn value="5" />
					<KeyboardBtn value="6" />
					<KeyboardBtn value="CE" />
					<KeyboardBtn value="1" />
					<KeyboardBtn value="2" />
					<KeyboardBtn value="3" />
					<KeyboardBtn value="=" className="StyledKeyboardBtn-equal" />
					<KeyboardBtn value="0" className="StyledKeyboardBtn-zero" />
					<KeyboardBtn value="." />
					<KeyboardBtn value="AC" />
				</Keyboard>
			</Wrapper>
		</ReactCalculator>
	);
};

export default Calculator;
