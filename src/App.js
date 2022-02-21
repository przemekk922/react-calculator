import React, { useState } from "react";
import {
	ReactCalculator,
	Title,
	Wrapper,
	Screen,
	PreviousOperationScreen,
	CurrentOperationScreen,
	Keyboard,
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
			if (operation === "") {
				setOperation((operation = "0"));
			}
		}
		if (value === "0") {
			if (operation.substring(0) === "0") {
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
			setResult(result);
		}
		if (operation === "") {
			operation = 0;
		}

		setResult((result = operation + " " + value));
		setOperation((operation = ""));
	};

	const KeyboardBtn = ({ value, className }) => {
		return (
			<StyledKeyboardBtn
				className={className}
				value={value}
				onClick={() => {
					switch (value) {
						case "+":
						case "−":
						case "✕":
						case "÷":
							operatorClickHandler(value);
							break;
						case "⌫":
							backspaceClickHandler();
							break;
						case "=":
							equalsClickHandler(value);
							break;
						case "CE":
							clearEntryClickHandler();
							break;
						case "AC":
							allClearClickHandler();
							break;
						default:
							numberClickHandler(value);
					}
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
