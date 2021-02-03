import { useState, useEffect } from "react";
import "./App.css";
import { DynamicForm } from "./components/DynamicForm";
import { Button } from "./components/Button";
import { GlobalProvider } from "./components/GlobalContext";

function App() {
	const [userChoice, setUserChoice] = useState(0);

	const makeChoice = (choice) => {
		setUserChoice(choice);
		console.log("choice", choice);
	};

	useEffect(() => {
		console.log("2", 2);
	}, []);

	const Buttons = () => {
		return (
			<>
				<span
					onClick={() => {
						makeChoice(1);
					}}
				>
					<Button text='Dynamic' choice={1} />
				</span>
				<span onClick={() => makeChoice(2)}>
					<Button text='Random' choice={2} />
				</span>
			</>
		);
	};

	return (
		<GlobalProvider>
			<div className='App'>
				<h1 style={{ fontSize: "36px" }}>Persamaan Kuadrat</h1>
				<div>
					<Buttons />
					<br />
					{userChoice === 1 ? (
						<DynamicForm isRandom={false} />
					) : userChoice === 2 ? (
						<DynamicForm isRandom={true} />
					) : null}
				</div>
			</div>
		</GlobalProvider>
	);
}

export default App;
