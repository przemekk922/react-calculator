import react from "react";
import styled from "styled-components";
import {
	ReactCalculator,
	Title,
	Wrapper,
	Screen,
	Keyboard,
	KeyboardBtn,
} from "./StyleSheet.js";

function App() {
	return (
		<ReactCalculator>
			<Title>React Calculator</Title>
			<Wrapper>
				<Screen></Screen>
				<Keyboard>
					<KeyboardBtn>&#43;</KeyboardBtn>
					<KeyboardBtn>&#8722;</KeyboardBtn>
					<KeyboardBtn>&#10005;</KeyboardBtn>
					<KeyboardBtn>&#247;</KeyboardBtn>
					<KeyboardBtn>7</KeyboardBtn>
					<KeyboardBtn>8</KeyboardBtn>
					<KeyboardBtn>9</KeyboardBtn>
					<KeyboardBtn className="KeyboardBtn-equal">&#x3D;</KeyboardBtn>
					<KeyboardBtn>4</KeyboardBtn>
					<KeyboardBtn>5</KeyboardBtn>
					<KeyboardBtn>6</KeyboardBtn>
					<KeyboardBtn>1</KeyboardBtn>
					<KeyboardBtn>2</KeyboardBtn>
					<KeyboardBtn>3</KeyboardBtn>
					<KeyboardBtn className="KeyboardBtn-zero">0</KeyboardBtn>
					<KeyboardBtn>&#8901;</KeyboardBtn>
					<KeyboardBtn>AC</KeyboardBtn>
				</Keyboard>
			</Wrapper>
		</ReactCalculator>
	);
}

export default App;
