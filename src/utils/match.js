const matchResult = (match) => {
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

export const matchesResult = (matches) => {
	const [match1, match2] = matches;

	const m1res = matchResult(match1);
	const m2res = matchResult(match2);

	return {
		home: m1res.home + m2res.home,
		draw: m1res.draw + m2res.draw,
		away: m1res.away + m2res.away,
	};
};
