const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.querySelector(".cards-container");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Sweden",
  sport: "Football",
  year: 2018,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Janne Andersson",
    matches: 7,
  },
  players: [
    {
      name: "Marcus Berg",
      position: "forward",
      number: 9,
      isCaptain: false,
      nickname: "Mackan",
    },
    {
      name: "Albin Ekdal",
      position: "midfielder",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
     {
      name: "Emil Forsberg",
      position: "midfielder",
      number: 10,
      isCaptain: false,
      nickname: "Foppa",
    },
    {
      name: "Sebastian Larsson",
      position: "midfielder",
      number: 7,
      isCaptain: false,
      nickname: "Sebbe/Seb",
    },
    {
      name: "Mikael Lustig",
      position: "defender",
      number: 2,
      isCaptain: false,
      nickname: "Micke",
    },
    {
      name: "Victor Nilsson Lindelöf",
      position: "defender",
      number: 3,
      isCaptain: false,
      nickname: "VNL",
    },
    {
      name: "Andreas Granqvist",
      position: "defender",
      number: 4,
      isCaptain: false,
      nickname: "Granen",
    },
    {
      name: "Ola Toivonen",
      position: "forward",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ludwig Augustinsson",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: "Ludde",
    },
    {
      name: "Robin Olsen",
      position: "goalkeeper",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Jimmy Durmaz",
      position: "midfielder",
      number: 21,
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
    playerCards.innerHTML += arr
      .map(
        ({ name, position, number, isCaptain, nickname }) =>
          `
          <div class="card"> <!-- Change player-card to card -->
          <img src="./images/panini ${name}.png" alt="${name}" class="player-image"> <!-- Correct image path -->
            <h2>${name} ${isCaptain ? "(Captain)" : ""}</h2>
            <p>Number: ${number}</p> <!-- Add player number -->
            <p>Position: ${position}</p>
            <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
          </div>
        `
      )
      .join("");
  };




playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(players.filter((player) => player.position === "midfielder"));
      break;
    case "defender":
      setPlayerCards(players.filter((player) => player.position === "defender"));
      break;
    case "goalkeeper":
      setPlayerCards(players.filter((player) => player.position === "goalkeeper"));
      break;
    case "all":
      setPlayerCards(); // Display all players
      break;
  }
});

