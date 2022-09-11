//You will get two arrays with two values each
//First arrays contains two Strings, first is the homeTeam and second is the awayTeam
//Sedond array is the results of all the matches where 1 represents home won and 0 is away won
//Write a function to determine who won the tournament


const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

const results = [0,0,1]

function tournamentWinner(competitions, results) {
    let teamsScores = {"":0}
    let winner = '';

    for (i in results) {
        if (results[i] === 1) {
            if (!competitions[i][0] in teamsScores) {
                teamsScores[competitions[i][0] = 0];
            }
        }
    }
    return teamsScores;
}

console.log(tournamentWinner(competitions, results));