// // let players = ["a", "b", "c", "d"];
// let players = ["a", "b", "c", "d", "e", "f"];
// const playersLength = players.length;
// // let players2 = ["a", "b", "c", "d", "e", "f"];
// // console.log(JSON.stringify(players) == JSON.stringify(players2));
// const schedule = {};

// const assignMatches = (player) => {
// 	if (!players.includes(player)) return;
// 	players = players.filter((p) => p !== player);
// 	const playersCopy = players.filter((p) => !schedule[player].includes(p));
// 	const random = Math.floor(Math.random() * playersCopy.length);
// 	const randomPlayer = playersCopy[random];
// 	if (!randomPlayer) {
// 		console.log("assignMatches -> playersCopy", playersCopy);
// 		console.log("assignMatches -> random", random);
// 		debugger;
// 	}
// 	// debugger;
// 	if (schedule[player].includes(randomPlayer) || schedule[randomPlayer].includes(player)) {
// 		assignMatches(player);
// 	} else {
// 		schedule[player].push(randomPlayer);
// 		schedule[randomPlayer].push(player);
// 		players = players.filter((p) => p !== randomPlayer && p !== player);
// 	}
// };

// players.map((player) => {
// 	schedule[player] = [];
// });

// for (let i = 0; i < players.length - 1; i++) {
// 	const playersCopy = [...players];
// 	players.map((player) => {
// 		assignMatches(player);
// 	});
// 	players = [...playersCopy];
// }

// console.log(schedule);

const data = `
Team 1 vs Team 18
Score

MATCH 1
×

Team 2 vs Team 17
Score

MATCH 2
×

Team 3 vs Team 16
Score

MATCH 3
×

Team 4 vs Team 15
Score

MATCH 4
×

Team 5 vs Team 14
Score

MATCH 5
×

Team 6 vs Team 13
Score

MATCH 6
×

Team 7 vs Team 12
Score

MATCH 7
×

Team 8 vs Team 11
Score

MATCH 8
×

Team 9 vs Team 10
Score

MATCH 9
×

Team 17 vs Team 1
Score

MATCH 10
×

Team 16 vs Team 18
Score

MATCH 11
×

Team 15 vs Team 2
Score

MATCH 12
×

Team 14 vs Team 3
Score

MATCH 13
×

Team 13 vs Team 4
Score

MATCH 14
×

Team 12 vs Team 5
Score

MATCH 15
×

Team 11 vs Team 6
Score

MATCH 16
×

Team 10 vs Team 7
Score

MATCH 17
×

Team 9 vs Team 8
Score

MATCH 18
×

Team 1 vs Team 16
Score

MATCH 19
×

Team 17 vs Team 15
Score

MATCH 20
×

Team 18 vs Team 14
Score

MATCH 21
×

Team 2 vs Team 13
Score

MATCH 22
×

Team 3 vs Team 12
Score

MATCH 23
×

Team 4 vs Team 11
Score

MATCH 24
×

Team 5 vs Team 10
Score

MATCH 25
×

Team 6 vs Team 9
Score

MATCH 26
×

Team 7 vs Team 8
Score

MATCH 27
×

Team 15 vs Team 1
Score

MATCH 28
×

Team 14 vs Team 16
Score

MATCH 29
×

Team 13 vs Team 17
Score

MATCH 30
×

Team 12 vs Team 18
Score

MATCH 31
×

Team 11 vs Team 2
Score

MATCH 32
×

Team 10 vs Team 3
Score

MATCH 33
×

Team 9 vs Team 4
Score

MATCH 34
×

Team 8 vs Team 5
Score

MATCH 35
×

Team 7 vs Team 6
Score

MATCH 36
×

Team 1 vs Team 14
Score

MATCH 37
×

Team 15 vs Team 13
Score

MATCH 38
×

Team 16 vs Team 12
Score

MATCH 39
×

Team 17 vs Team 11
Score

MATCH 40
×

Team 18 vs Team 10
Score

MATCH 41
×

Team 2 vs Team 9
Score

MATCH 42
×

Team 3 vs Team 8
Score

MATCH 43
×

Team 4 vs Team 7
Score

MATCH 44
×

Team 5 vs Team 6
Score

MATCH 45
×

Team 13 vs Team 1
Score

MATCH 46
×

Team 12 vs Team 14
Score

MATCH 47
×

Team 11 vs Team 15
Score

MATCH 48
×

Team 10 vs Team 16
Score

MATCH 49
×

Team 9 vs Team 17
Score

MATCH 50
×

Team 8 vs Team 18
Score

MATCH 51
×

Team 7 vs Team 2
Score

MATCH 52
×

Team 6 vs Team 3
Score

MATCH 53
×

Team 5 vs Team 4
Score

MATCH 54
×

Team 1 vs Team 12
Score

MATCH 55
×

Team 13 vs Team 11
Score

MATCH 56
×

Team 14 vs Team 10
Score

MATCH 57
×

Team 15 vs Team 9
Score

MATCH 58
×

Team 16 vs Team 8
Score

MATCH 59
×

Team 17 vs Team 7
Score

MATCH 60
×

Team 18 vs Team 6
Score

MATCH 61
×

Team 2 vs Team 5
Score

MATCH 62
×

Team 3 vs Team 4
Score

MATCH 63
×

Team 11 vs Team 1
Score

MATCH 64
×

Team 10 vs Team 12
Score

MATCH 65
×

Team 9 vs Team 13
Score

MATCH 66
×

Team 8 vs Team 14
Score

MATCH 67
×

Team 7 vs Team 15
Score

MATCH 68
×

Team 6 vs Team 16
Score

MATCH 69
×

Team 5 vs Team 17
Score

MATCH 70
×

Team 4 vs Team 18
Score

MATCH 71
×

Team 3 vs Team 2
Score

MATCH 72
×

Team 1 vs Team 10
Score

MATCH 73
×

Team 11 vs Team 9
Score

MATCH 74
×

Team 12 vs Team 8
Score

MATCH 75
×

Team 13 vs Team 7
Score

MATCH 76
×

Team 14 vs Team 6
Score

MATCH 77
×

Team 15 vs Team 5
Score

MATCH 78
×

Team 16 vs Team 4
Score

MATCH 79
×

Team 17 vs Team 3
Score

MATCH 80
×

Team 18 vs Team 2
Score

MATCH 81
×

Team 9 vs Team 1
Score

MATCH 82
×

Team 8 vs Team 10
Score

MATCH 83
×

Team 7 vs Team 11
Score

MATCH 84
×

Team 6 vs Team 12
Score

MATCH 85
×

Team 5 vs Team 13
Score

MATCH 86
×

Team 4 vs Team 14
Score

MATCH 87
×

Team 3 vs Team 15
Score

MATCH 88
×

Team 2 vs Team 16
Score

MATCH 89
×

Team 18 vs Team 17
Score

MATCH 90
×

Team 1 vs Team 8
Score

MATCH 91
×

Team 7 vs Team 9
Score

MATCH 92
×

Team 10 vs Team 6
Score

MATCH 93
×

Team 11 vs Team 5
Score

MATCH 94
×

Team 12 vs Team 4
Score

MATCH 95
×

Team 13 vs Team 3
Score

MATCH 96
×

Team 14 vs Team 2
Score

MATCH 97
×

Team 15 vs Team 18
Score

MATCH 98
×

Team 16 vs Team 17
Score

MATCH 99
×

Team 7 vs Team 1
Score

MATCH 100
×

Team 6 vs Team 8
Score

MATCH 101
×

Team 5 vs Team 9
Score

MATCH 102
×

Team 4 vs Team 10
Score

MATCH 103
×

Team 3 vs Team 11
Score

MATCH 104
×

Team 2 vs Team 12
Score

MATCH 105
×

Team 18 vs Team 13
Score

MATCH 106
×

Team 17 vs Team 14
Score

MATCH 107
×

Team 16 vs Team 15
Score

MATCH 108
×

Team 1 vs Team 6
Score

MATCH 109
×

Team 5 vs Team 7
Score

MATCH 110
×

Team 8 vs Team 4
Score

MATCH 111
×

Team 9 vs Team 3
Score

MATCH 112
×

Team 10 vs Team 2
Score

MATCH 113
×

Team 11 vs Team 18
Score

MATCH 114
×

Team 12 vs Team 17
Score

MATCH 115
×

Team 13 vs Team 16
Score

MATCH 116
×

Team 14 vs Team 15
Score

MATCH 117
×

Team 5 vs Team 1
Score

MATCH 118
×

Team 4 vs Team 6
Score

MATCH 119
×

Team 3 vs Team 7
Score

MATCH 120
×

Team 2 vs Team 8
Score

MATCH 121
×

Team 18 vs Team 9
Score

MATCH 122
×

Team 17 vs Team 10
Score

MATCH 123
×

Team 16 vs Team 11
Score

MATCH 124
×

Team 15 vs Team 12
Score

MATCH 125
×

Team 14 vs Team 13
Score

MATCH 126
×

Team 1 vs Team 4
Score

MATCH 127
×

Team 3 vs Team 5
Score

MATCH 128
×

Team 6 vs Team 2
Score

MATCH 129
×

Team 18 vs Team 7
Score

MATCH 130
×

Team 8 vs Team 17
Score

MATCH 131
×

Team 9 vs Team 16
Score

MATCH 132
×

Team 10 vs Team 15
Score

MATCH 133
×

Team 11 vs Team 14
Score

MATCH 134
×

Team 12 vs Team 13
Score

MATCH 135
×

Team 3 vs Team 1
Score

MATCH 136
×

Team 2 vs Team 4
Score

MATCH 137
×

Team 18 vs Team 5
Score

MATCH 138
×

Team 17 vs Team 6
Score

MATCH 139
×

Team 16 vs Team 7
Score

MATCH 140
×

Team 15 vs Team 8
Score

MATCH 141
×

Team 14 vs Team 9
Score

MATCH 142
×

Team 13 vs Team 10
Score

MATCH 143
×

Team 12 vs Team 11
Score

MATCH 144
×

Team 1 vs Team 2
Score

MATCH 145
×

Team 18 vs Team 3
Score

MATCH 146
×

Team 4 vs Team 17
Score

MATCH 147
×

Team 16 vs Team 5
Score

MATCH 148
×

Team 6 vs Team 15
Score

MATCH 149
×

Team 7 vs Team 14
Score

MATCH 150
×

Team 8 vs Team 13
Score

MATCH 151
×

Team 9 vs Team 12
Score

MATCH 152
×

Team 10 vs Team 11
Score

MATCH 153
×

Team 18 vs Team 1
Score

MATCH 154
×

Team 17 vs Team 2
Score

MATCH 155
×

Team 16 vs Team 3
Score

MATCH 156
×

Team 15 vs Team 4
Score

MATCH 157
×

Team 14 vs Team 5
Score

MATCH 158
×

Team 13 vs Team 6
Score

MATCH 159
×

Team 12 vs Team 7
Score

MATCH 160
×

Team 11 vs Team 8
Score

MATCH 161
×

Team 10 vs Team 9
Score

MATCH 162
×

Team 1 vs Team 17
Score

MATCH 163
×

Team 16 vs Team 18
Score

MATCH 164
×

Team 2 vs Team 15
Score

MATCH 165
×

Team 14 vs Team 3
Score

MATCH 166
×

Team 4 vs Team 13
Score

MATCH 167
×

Team 5 vs Team 12
Score

MATCH 168
×

Team 6 vs Team 11
Score

MATCH 169
×

Team 7 vs Team 10
Score

MATCH 170
×

Team 8 vs Team 9
Score

MATCH 171
×

Team 16 vs Team 1
Score

MATCH 172
×

Team 15 vs Team 17
Score

MATCH 173
×

Team 14 vs Team 18
Score

MATCH 174
×

Team 13 vs Team 2
Score

MATCH 175
×

Team 12 vs Team 3
Score

MATCH 176
×

Team 11 vs Team 4
Score

MATCH 177
×

Team 10 vs Team 5
Score

MATCH 178
×

Team 9 vs Team 6
Score

MATCH 179
×

Team 8 vs Team 7
Score

MATCH 180
×

Team 1 vs Team 15
Score

MATCH 181
×

Team 14 vs Team 16
Score

MATCH 182
×

Team 17 vs Team 13
Score

MATCH 183
×

Team 12 vs Team 18
Score

MATCH 184
×

Team 2 vs Team 11
Score

MATCH 185
×

Team 3 vs Team 10
Score

MATCH 186
×

Team 4 vs Team 9
Score

MATCH 187
×

Team 5 vs Team 8
Score

MATCH 188
×

Team 6 vs Team 7
Score

MATCH 189
×

Team 14 vs Team 1
Score

MATCH 190
×

Team 13 vs Team 15
Score

MATCH 191
×

Team 12 vs Team 16
Score

MATCH 192
×

Team 11 vs Team 17
Score

MATCH 193
×

Team 10 vs Team 18
Score

MATCH 194
×

Team 9 vs Team 2
Score

MATCH 195
×

Team 8 vs Team 3
Score

MATCH 196
×

Team 7 vs Team 4
Score

MATCH 197
×

Team 6 vs Team 5
Score

MATCH 198
×

Team 1 vs Team 13
Score

MATCH 199
×

Team 12 vs Team 14
Score

MATCH 200
×

Team 15 vs Team 11
Score

MATCH 201
×

Team 10 vs Team 16
Score

MATCH 202
×

Team 17 vs Team 9
Score

MATCH 203
×

Team 18 vs Team 8
Score

MATCH 204
×

Team 2 vs Team 7
Score

MATCH 205
×

Team 3 vs Team 6
Score

MATCH 206
×

Team 4 vs Team 5
Score

MATCH 207
×

Team 12 vs Team 1
Score

MATCH 208
×

Team 11 vs Team 13
Score

MATCH 209
×

Team 10 vs Team 14
Score

MATCH 210
×

Team 9 vs Team 15
Score

MATCH 211
×

Team 8 vs Team 16
Score

MATCH 212
×

Team 7 vs Team 17
Score

MATCH 213
×

Team 6 vs Team 18
Score

MATCH 214
×

Team 5 vs Team 2
Score

MATCH 215
×

Team 4 vs Team 3
Score

MATCH 216
×

Team 1 vs Team 11
Score

MATCH 217
×

Team 10 vs Team 12
Score

MATCH 218
×

Team 13 vs Team 9
Score

MATCH 219
×

Team 8 vs Team 14
Score

MATCH 220
×

Team 15 vs Team 7
Score

MATCH 221
×

Team 16 vs Team 6
Score

MATCH 222
×

Team 17 vs Team 5
Score

MATCH 223
×

Team 18 vs Team 4
Score

MATCH 224
×

Team 2 vs Team 3
Score

MATCH 225
×

Team 10 vs Team 1
Score

MATCH 226
×

Team 9 vs Team 11
Score

MATCH 227
×

Team 8 vs Team 12
Score

MATCH 228
×

Team 7 vs Team 13
Score

MATCH 229
×

Team 6 vs Team 14
Score

MATCH 230
×

Team 5 vs Team 15
Score

MATCH 231
×

Team 4 vs Team 16
Score

MATCH 232
×

Team 3 vs Team 17
Score

MATCH 233
×

Team 2 vs Team 18
Score

MATCH 234
×

Team 1 vs Team 9
Score

MATCH 235
×

Team 8 vs Team 10
Score

MATCH 236
×

Team 11 vs Team 7
Score

MATCH 237
×

Team 6 vs Team 12
Score

MATCH 238
×

Team 13 vs Team 5
Score

MATCH 239
×

Team 14 vs Team 4
Score

MATCH 240
×

Team 15 vs Team 3
Score

MATCH 241
×

Team 16 vs Team 2
Score

MATCH 242
×

Team 17 vs Team 18
Score

MATCH 243
×

Team 8 vs Team 1
Score

MATCH 244
×

Team 7 vs Team 9
Score

MATCH 245
×

Team 6 vs Team 10
Score

MATCH 246
×

Team 5 vs Team 11
Score

MATCH 247
×

Team 4 vs Team 12
Score

MATCH 248
×

Team 3 vs Team 13
Score

MATCH 249
×

Team 2 vs Team 14
Score

MATCH 250
×

Team 18 vs Team 15
Score

MATCH 251
×

Team 17 vs Team 16
Score

MATCH 252
×

Team 1 vs Team 7
Score

MATCH 253
×

Team 6 vs Team 8
Score

MATCH 254
×

Team 9 vs Team 5
Score

MATCH 255
×

Team 4 vs Team 10
Score

MATCH 256
×

Team 11 vs Team 3
Score

MATCH 257
×

Team 12 vs Team 2
Score

MATCH 258
×

Team 13 vs Team 18
Score

MATCH 259
×

Team 14 vs Team 17
Score

MATCH 260
×

Team 15 vs Team 16
Score

MATCH 261
×

Team 6 vs Team 1
Score

MATCH 262
×

Team 5 vs Team 7
Score

MATCH 263
×

Team 4 vs Team 8
Score

MATCH 264
×

Team 3 vs Team 9
Score

MATCH 265
×

Team 2 vs Team 10
Score

MATCH 266
×

Team 18 vs Team 11
Score

MATCH 267
×

Team 17 vs Team 12
Score

MATCH 268
×

Team 16 vs Team 13
Score

MATCH 269
×

Team 15 vs Team 14
Score

MATCH 270
×

Team 1 vs Team 5
Score

MATCH 271
×

Team 4 vs Team 6
Score

MATCH 272
×

Team 7 vs Team 3
Score

MATCH 273
×

Team 2 vs Team 8
Score

MATCH 274
×

Team 9 vs Team 18
Score

MATCH 275
×

Team 10 vs Team 17
Score

MATCH 276
×

Team 11 vs Team 16
Score

MATCH 277
×

Team 12 vs Team 15
Score

MATCH 278
×

Team 13 vs Team 14
Score

MATCH 279
×

Team 4 vs Team 1
Score

MATCH 280
×

Team 3 vs Team 5
Score

MATCH 281
×

Team 2 vs Team 6
Score

MATCH 282
×

Team 18 vs Team 7
Score

MATCH 283
×

Team 17 vs Team 8
Score

MATCH 284
×

Team 16 vs Team 9
Score

MATCH 285
×

Team 15 vs Team 10
Score

MATCH 286
×

Team 14 vs Team 11
Score

MATCH 287
×

Team 13 vs Team 12
Score

MATCH 288
×

Team 1 vs Team 3
Score

MATCH 289
×

Team 2 vs Team 4
Score

MATCH 290
×

Team 5 vs Team 18
Score

MATCH 291
×

Team 17 vs Team 6
Score

MATCH 292
×

Team 7 vs Team 16
Score

MATCH 293
×

Team 8 vs Team 15
Score

MATCH 294
×

Team 9 vs Team 14
Score

MATCH 295
×

Team 10 vs Team 13
Score

MATCH 296
×

Team 11 vs Team 12
Score

MATCH 297
×

Team 2 vs Team 1
Score

MATCH 298
×

Team 18 vs Team 3
Score

MATCH 299
×

Team 17 vs Team 4
Score

MATCH 300
×

Team 16 vs Team 5
Score

MATCH 301
×

Team 15 vs Team 6
Score

MATCH 302
×

Team 14 vs Team 7
Score

MATCH 303
×

Team 13 vs Team 8
Score

MATCH 304
×

Team 12 vs Team 9
Score

MATCH 305
×

Team 11 vs Team 10
Score

MATCH 306
×`;

const players = [
	"Kamil Karkowski",
	"Dawid Jasiński",
	"Artur Sikorski",
	"Bartek Jedynak",
	"Ryszard Todt",
	"Tomasz Todt",
	"Krzysztof Dudek",
	"Rafik Adi",
	"Przemysław Masiewicz",
	"Luk Pop",
	"Kasper Szymała",
	"Michael Żółtowski",
	"Łukasz Przecherka",
	"Arkadiusz Wójcik",
	"Adrian Hachuła",
	"Mateusz Piguła",
	"Krzysztof Szymała",
	"Mariusz Mariusz",
];

const regexp = /Team (\d+)/;

const replaceNumForPlayer = (num) => players[+num - 1];

const sch = data
	.split("\n")
	.filter((x) => x.includes("Team"))
	.slice(0, 153)
	.map((match) => {
		const matchCopy = match.split(" vs ");
		return [
			replaceNumForPlayer(matchCopy[0].match(regexp)[1]),
			replaceNumForPlayer(matchCopy[1].match(regexp)[1]),
		].join(" vs ");
	});

const addSndRound = (arr) => {
	const sndRound = arr.map((match) => {
		return match.map((single) => single.split(" vs ").reverse().join(" vs "));
	});

	arr.push(...sndRound);
};

function chunkArrayInGroups(arr, size) {
	var myArray = [];

	for (let i = 0; i < arr.length; i += size) {
		myArray.push(arr.slice(i, i + size));
	}

	return myArray;
}

const kolejki = chunkArrayInGroups(sch, 9).sort(() => Math.random() - 0.5);
addSndRound(kolejki);

const lista = document.querySelector(".lista");

kolejki.forEach((kolejka, index) => {
	lista.innerHTML += `<li>Kolejka nr ${index + 1}</li>`;
	kolejka.forEach((match) => {
		lista.innerHTML += `<li>${match}</li>`;
	});

	lista.innerHTML += `<br />`;
});
