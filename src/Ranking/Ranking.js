import React from "react";
import { Link } from "react-router-dom";

import { Table } from "shared";
import styles from "./Ranking.module.scss";

export const Ranking = ({ players }) => {
	return (
		<Table striped bordered hover variant="dark" className={(styles.table, "mt-3")}>
			<thead>
				<tr>
					<th>Lp.</th>
					<th>Imię i nazwisko</th>
					<th>Klub</th>
					<th>M</th>
					<th>W</th>
					<th>R</th>
					<th>P</th>
					<th>B</th>
					<th>P</th>
					<th>PSN</th>
				</tr>
			</thead>
			<tbody>
				{players.map((player, i) => {
					return (
						<tr key={player.psn}>
							<td>{i + 1}</td>
							<td>
								<Link to={`/${player.psn}`} className={styles.link}>
									{player.name}
								</Link>
							</td>
							<td className={styles.logoBackground}>
								<img className={styles.logo} src={player.club.logo} alt={player.club.name} title={player.club.name} />
							</td>
							<td>{player.matches_count}</td>
							<td>{player.wins}</td>
							<td>{player.draws}</td>
							<td>{player.loses}</td>
							<td className={styles.noWrap}>
								{player.goals_scored} : {player.goals_conceded}
							</td>
							<td>{player.points}</td>
							<td>{player.psn}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};
