import React from "react";
import { Table } from "shared";

import styles from "./Ranking.module.scss";

export const Ranking = ({ players }) => {
	return (
		<Table striped bordered hover variant="dark" className={(styles.table, "mt-3")}>
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
