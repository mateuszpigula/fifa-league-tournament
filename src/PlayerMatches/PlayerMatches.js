import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Row, Col } from "shared";
import { getPlayerSchedule, getPlayerData } from "utils/player";
import { getAPI } from "api";
import styles from "./PlayerMatches.module.scss";

const ResultIcon = ({ home, away, player }) => {
	if (home === undefined || away === undefined) return null;

	let type, letter;
	if (home === away) {
		type = "draw";
		letter = "R";
	} else {
		const whoWin = home > away ? "home" : "away";

		if (whoWin === player) {
			type = "win";
			letter = "W";
		} else {
			type = "lose";
			letter = "P";
		}
	}
	return <span className={`${styles.resultIcon} ${styles[type]}`}>{letter}</span>;
};

export const PlayerMatches = ({ players }) => {
	const [loading, setLoading] = useState(true);
	const [playerDetails, setPlayerDetails] = useState({});
	const [playerMatchDetails, setPlayerMatchDetails] = useState([]);
	const [playerSchedule, setPlayerSchedule] = useState([]);
	let { playerId } = useParams();

	useEffect(() => {
		getAPI(`getPlayerDetails?id=${playerId}`)
			.then((res) => res.json())
			.then((res) => {
				setPlayerDetails(res.data.player);
				setPlayerMatchDetails(res.data.playerMatches);
				setPlayerSchedule(getPlayerSchedule(res.data.player.name));
				setLoading(false);
				console.log("PlayerMatches -> res", res.data);
			});
	}, [playerId]);

	const pluralization = (num) => {
		if (num === 1) return "meczu";
		return "meczach";
	};
	if (loading) {
		return <div>Loading</div>;
	}

	return (
		<div className={styles.detailsWrapper}>
			<Row className={styles.details}>
				<Col>
					<img src={playerDetails.club.logo} alt="asd" />
				</Col>
				<Col>
					<h1>{playerDetails.name}</h1>
					<p>psn: {playerDetails.psn}</p>
					<p>
						punkty: {playerDetails.points} (w {playerDetails.matches_count}
						<span> {pluralization(playerDetails.matches_count)}</span>)
					</p>
					<p>drużyna: {playerDetails.club.name}</p>
				</Col>
			</Row>
			{!playerSchedule.length && (
				<Row>
					<h2>Brak meczy do tej pory</h2>
				</Row>
			)}
			{playerSchedule.map(({ player1, player2 }, i) => {
				const player1Data = getPlayerData(player1);
				const player2Data = getPlayerData(player2);
				const theirMatch = playerMatchDetails.find(
					(match) => match.player1 === player1Data.psn && match.player2 === player2Data.psn
				);
				const { home, away } = theirMatch || {};
				return (
					<div key={`${player1}${player2}`} className="mb-3">
						<Row>{i + 1}. Kolejka</Row>
						<Row className={styles.matchRow}>
							<ResultIcon home={home} away={away} player="home" />
							<Col as={Link} to={`/${player1Data.psn}`}>
								{player1}
							</Col>
							<Col>
								{home} - {away}
							</Col>
							<ResultIcon home={home} away={away} player="away" />
							<Col as={Link} to={`/${player2Data.psn}`}>
								{player2}
							</Col>
						</Row>
					</div>
				);
			})}
		</div>
	);
};
