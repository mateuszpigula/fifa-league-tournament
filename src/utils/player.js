import scheduleData from "schedule_data";

let playersData = [];
export const setPlayersData = (data) => {
	playersData = [...data];
};

export const getPlayerSchedule = (player) =>
	[...scheduleData]
		.map((round) => round.filter((match) => match.player1 === player || match.player2 === player))
		.flat();

export const getPlayerData = (name) => playersData.find((player) => player.name === name);
