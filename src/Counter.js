import React, { useState, useRef } from "react";

export default function Counter() {
	const [count, setCount] = React.useState(0);
	const [mount, setMount] = React.useState(true);
	let ref = useRef(0);

	function componentDidMount() {
		console.log("componentDidMount");
	}

	function componentDidUpdate() {
		console.log("componentDidUpdate");
	}

	function componentWillUnmount() {
		console.log("componentWillUnmount");
	}

	function toggleMount() {
		setMount(!mount);
	}

	if (mount) {
		componentDidMount();
	} else {
		componentWillUnmount();
	}

	function unMount() {
		setCount(0);
		setMount(false);
	}

	function handleClick() {
		ref.current = ref.current + 1;
		alert("You clicked " + ref.current + " times!");
	}

	return (
		<>
			<div>
				<p>Count: {count}</p>
				<button onClick={() => setCount(count + 1)}>+</button>
				<button onClick={() => setCount(count - 1)}>-</button>
			</div>
			<div>
				<button onClick={handleClick}>Click me!</button>
			</div>
		</>
	);
}
