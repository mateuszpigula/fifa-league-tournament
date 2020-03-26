import React, { useEffect, useState } from "react";
import { getAPI } from "../api";
import { Table } from "shared";
import styles from "./Ranking.module.css";

const Ranking = () => {
	const [players, setPlayers] = useState([]);
	useEffect(() => {
		getAPI("playerRead")
			.then(res => res.json())
			.then(res => {
				setPlayers(res.data);
				console.log("Ranking -> res.data", res.data);
			});
	}, []);

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Imię i nazwisko</th>
					<th>Klub</th>
					<th>Mecze</th>
					<th>Punkty</th>
					<th>PSN</th>
				</tr>
			</thead>
			<tbody>
				{players.map(player => (
					<tr key={player.psn}>
						<td>{player.name}</td>
						<td>
							<img className={styles.logo} src={player.club.logo} alt={player.club.name} />
							{player.club.name}
						</td>
						<td>{player.stats.matches_count}</td>
						<td>{player.stats.points}</td>
						<td>{player.psn}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default Ranking;
