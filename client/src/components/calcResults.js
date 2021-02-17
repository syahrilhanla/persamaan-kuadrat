export const calcResults = (a, b, c) => {
	// if (valueA === "") setA(0);
	// if (valueB === "") setB(0);
	// if (valueC === "") setC(0);
	let x1, x2;
	const D = Math.pow(b, 2) - 4 * a * c;

	if (D > 0) {
		x1 = ((-b + Math.sqrt(D)) / (2 * a)).toFixed(2);
		x2 = ((-b - Math.sqrt(D)) / (2 * a)).toFixed(2);

		// console.log('valueX :>> ', valueX);
	} // eslint-disable-next-line
	else if (D == 0) {
		x1 = (-b / (2 * a)).toFixed(2);
		x2 = x1;
		// console.log('valueX :>> ', valueX);
	}

	return { x1, x2, D };
};
