const Players = [];

function Player(Name, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Total, Rank) {
    this.Name = Name;
    this.Monday = Monday;
    this.Tuesday = Tuesday;
    this.Wednesday = Wednesday;
    this.Thursday = Thursday;
    this.Friday = Friday;
    this.Saturday = Saturday;
    this.Sunday = Sunday;
    this.Total = Total;
    this.Rank = Rank;

    Players.push(this);
}

var Aubree = new Player("Aub", 5, "", "", "", "", "", "", "", 1);
var Bryson = new Player("Bry", 4, "", "", "", "", "", "", "", 2);
var Ian = new Player("Ian", 5, "", "", "", "", "", "", "", 3);
var Mom = new Player("Mom", 3, "", "", "", "", "", "", "", 4);

function calcTotal() {
    for (var x = 0; x < Players.length; x++) {
        Players[x].Total = (Players[x].Monday + Players[x].Tuesday +
            Players[x].Wednesday + Players[x].Thursday + Players[x].Friday +
            Players[x].Saturday + Players[x].Sunday)
    }
}

function sortByTotal() {
    for (var y = 0; y < Players.length; y++) {
        for (var x = 0; x < Players.length - 1; x++) {
            var temp = Players[x];
            if (Players[x].Total > Players[x + 1].Total) {
                Players[x] = Players[x + 1];
                Players[x + 1] = temp;
            }
        }
    }
}

function changeRank() {
    for (var x = 0; x < Players.length; x++) {
        Players[x].Rank = x + 1;
        if (x > 0 && Players[x].Total == Players[x - 1].Total) {
            Players[x].Rank = Players[x - 1].Rank;
        }
    }
}

function displayScores() {
    for (var x = 0; x < Players.length; x++) {
        document.getElementById("rank" + (x + 1)).innerHTML = Players[x].Rank;
        document.getElementById("name" + (x + 1)).innerHTML = Players[x].Name;
        document.getElementById("mon" + (x + 1)).innerHTML = Players[x].Monday;
        document.getElementById("tue" + (x + 1)).innerHTML = Players[x].Tuesday;
        document.getElementById("wed" + (x + 1)).innerHTML = Players[x].Wednesday;
        document.getElementById("thurs" + (x + 1)).innerHTML = Players[x].Thursday;
        document.getElementById("fri" + (x + 1)).innerHTML = Players[x].Friday;
        document.getElementById("sat" + (x + 1)).innerHTML = Players[x].Saturday;
        document.getElementById("sun" + (x + 1)).innerHTML = Players[x].Sunday;
        document.getElementById("tot" + (x + 1)).innerHTML = Players[x].Total;
    }
}

function loadPage() {
    calcTotal();
    sortByTotal();
    changeRank();
    displayScores();
}