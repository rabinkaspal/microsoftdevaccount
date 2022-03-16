import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import boxes from "./boxes.js";

function App() {
	const [squares, setSquares] = React.useState(boxes);

	function toggle(id) {
		setSquares((prevSquares) => {
			return prevSquares.map((square) => {
				return square.id == id ? { ...square, on: !square.on } : square;
			});
		});
	}

	// 	setSquares((prevSquares) => {
	// 		const newSquares = [];

	// 		for (let i = 0; i < prevSquares.length; i++) {
	// 			const currentSquare = prevSquares[i];
	// 			if (currentSquare.id === id) {
	// 				const updatedSquare = {
	// 					...currentSquare,
	// 					on: !currentSquare.on,
	// 				};
	// 				newSquares.push(updatedSquare);
	// 			} else {
	// 				newSquares.push(currentSquare);
	// 			}
	// 		}
	// 		return newSquares;
	// 	});
	// }

	const squareElements = squares.map((square) => {
		return (
			<Box
				key={square.id}
				on={square.on}
				onClick={() => toggle(square.id)}
			/>
		);
	});

	return <div>{squareElements}</div>;
}

export default App;
