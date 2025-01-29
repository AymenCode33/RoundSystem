// Services

const Maps = game.GetService("ServerStorage").FindFirstChild("Maps");
const Players = game.GetService("Players");

// Fonctions

function StartGame() {
	const EligiblePlayer: Player[] = [];

	for (const player of Players.GetPlayers()) {
		if (player.GetAttribute("AFK") === false) {
			EligiblePlayer.insert(EligiblePlayer.size(), player);
		}
	}

	return EligiblePlayer;
}

export { StartGame };
