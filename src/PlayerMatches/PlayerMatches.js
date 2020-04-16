import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Row, Col } from "shared";
import { getAPI } from "api";
import styles from "./PlayerMatches.module.scss";

export const PlayerMatches = ({ players }) => {
	const [loading, setLoading] = useState(true);
	const [playerDetails, setPlayerDetails] = useState({});
	const [playerMatchDetails, setPlayerMatchDetails] = useState([]);
	let { playerId } = useParams();

	useEffect(() => {
		getAPI(`getPlayerDetails?id=${playerId}`)
			.then((res) => res.json())
			.then((res) => {
				setPlayerDetails(res.data.player);
				setPlayerMatchDetails(res.data.playerMatches);
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
			{!playerMatchDetails.length && (
				<Row>
					<h2>Brak meczy do tej pory</h2>
				</Row>
			)}
			{!!playerMatchDetails.length && (
				<div>
					<h2>Mecze:</h2>
					{playerMatchDetails.map((match) => {
						return (
							<Row key={match._id} className={styles.matchRow}>
								<Col as={Link} to={`/${match.player1}`}>
									{match.player1}
								</Col>
								<Col>
									<Row>
										{match.match1.home} - {match.match1.away}
									</Row>
									<Row>
										{match.match2.home} - {match.match2.away}
									</Row>
								</Col>
								<Col as={Link} to={`/${match.player2}`}>
									{match.player2}
								</Col>
							</Row>
						);
					})}
				</div>
			)}
			{players.map((player) => {
				const matchWithThatPlayer = playerMatchDetails.find((match) => {
					return match.player1 === player.psn || match.player2 === player.psn;
				});

				if (!matchWithThatPlayer) {
					return (
						<Row key={player.psn} className={styles.matchRow}>
							{
								<>
									<Col>{playerId}</Col>
									<Col>-</Col>
									<Col as={Link} to={`/${player.psn}`}>
										{player.psn}
									</Col>
								</>
							}
						</Row>
					);
				}
			})}
		</div>
	);
};
