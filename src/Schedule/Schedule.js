import React from "react";

import { Row, Col } from "shared";
import scheduleData from "schedule_data";
import styles from "./Schedule.module.scss";

export const Schedule = () => {
	return (
		<div className={styles.schedule}>
			{Object.values(scheduleData).map((value, index) => {
				return (
					<div key={index} className={styles.round}>
						{index + 1}. Kolejka
						{value.map(({ player1, player2, home, away }) => {
							return (
								<Row key={`${player1}${player2}`}>
									<Col>{player1}</Col>
									<Col style={{ textAlign: "center" }}>
										{home} - {away}
									</Col>
									<Col>{player2}</Col>
								</Row>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};
