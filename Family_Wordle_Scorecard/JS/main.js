const Players = [];

switch (new Date().getDay()) {
    case 0:
        document.getElementById("sun").style = "background-color: #e3e2e1"
        break;
    case 1:
        document.getElementById("mon").style = "background-color: #e3e2e1"
        break;
    case 2:
        document.getElementById("tue").style = "background-color: #e3e2e1"
        break;
    case 3:
        document.getElementById("wed").style = "background-color: #e3e2e1"
        break;
    case 4:
        document.getElementById("thur").style = "background-color: #e3e2e1"
        break;
    case 5:
        document.getElementById("fri").style = "background-color: #e3e2e1"
        break;
    case 6:
        document.getElementById("sat").style = "background-color: #e3e2e1"
}

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

var Aubree = new Player("Aub", 7, 5, 2, 7, 2, "", "", "", 1);
var Bryson = new Player("Bry", 3, 2, 4, 4, 4, 5, "", "", 2);
var Ian = new Player("Ian", 4, 5, 4, 5, 6, 4, "", "", 3);
var Mom = new Player("Mom", 4, 7, 4, 3, 4, 4, "", "", 4);

function calcTotal() {
    for (var x = 0; x < Players.length; x++) {
        Players[x].Total = (Players[x].Monday + Players[x].Tuesday +
            Players[x].Wednesday + Players[x].Thursday + Players[x].Friday +
            Players[x].Saturday + Players[x].Sunday)
    }
}

// sort Players array by total score
// function sortByTotal() {
//     for (var y = 0; y < Players.length; y++) {
//         for (var x = 0; x < Players.length - 1; x++) {
//             var temp = Players[x];
//             if (Players[x].Total > Players[x + 1].Total) {
//                 Players[x] = Players[x + 1];
//                 Players[x + 1] = temp;
//             }
//         }
//     }
// }

// NEW SORT FUNCTION SINCE THE OLD ONE HAD SOME BUGS
function sortByTotal() {
    let totals = [];
    for (var x = 0; x < Players.length; x++) {
        totals.push(Players[x].Total);
    }
    totals.sort(function (a, b) { return b - a });

    for (var y = 0; y < totals.length; y++) {
        for (var z = 0; z < Players.length; z++) {
            if (Players[z].Total == totals[y]) {
                Players[z].Rank = 4 - y;
            }
        }
    }

    for (var c = 0; c < Players.length; c++) {
        for (var p = 0; p < Players.length; p++) {
            var temp = Players[c];
            if (c + 1 == Players[p].Rank) {
                Players[c] = Players[p];
                Players[p] = temp;
            }
        }
    }
}

// set ranks and account for players with equal totals
// function changeRank() {
//     for (var x = 0; x < Players.length; x++) {
//         Players[x].Rank = x + 1;
//         if (x > 0 && Players[x].Total == Players[x - 1].Total) {
//             Players[x].Rank = Players[x - 1].Rank;
//         }
//     }
// }

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
    // changeRank();
    displayScores();
}