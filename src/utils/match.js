export const matchResult = (match) => {
	let home = 0,
		draw = 0,
		away = 0;

	if (match.home === match.away) {
		draw += 1;
	} else if (match.home > match.away) {
		home += 1;
	} else {
		away += 1;
	}

	return {
		home,
		draw,
		away,
	};
};
