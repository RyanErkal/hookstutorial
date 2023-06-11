import React, { useState, useEffect } from "react";

export default function Counter() {
	const [count, setCount] = useState(0); //const [state, setState] = useState(initialState);
	const [width, setWidth] = useState(50);

	useEffect(() => {
		console.log("componentDidMount + componentDidUpdate");
	});

	useEffect(() => {
		console.log("componentDidMount");
	}, []);

	useEffect(() => {
		console.log("componentDidUpdate");
	}, [count]);

	const increaseWidth = () => setWidth((previousWidth) => previousWidth + 10);

	return (
		<>
			<div>
				<p>Count: {count}</p>
				<button onClick={() => setCount(count + 1)}>+</button>
				<button onClick={() => setCount(count - 1)}>-</button>
			</div>
			<div>
				<button style={{ width }} onClick={increaseWidth}>
					I grow
				</button>
			</div>
		</>
	);
}
