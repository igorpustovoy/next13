import { useState } from "react";

export const ProductCounter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div className="flex justify-center">
			<button onClick={() => setCounter((c) => c - 1)}>-</button>
			<input readOnly value={counter} />
			<button onClick={() => setCounter((c) => c + 1)}>+</button>
		</div>
	);
};
