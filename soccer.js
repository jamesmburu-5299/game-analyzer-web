const game = {
    gameteams:['Blues','Reds'],
    gameid:'37',
    team1: 'BLUES',
    team2: 'REDS',
    players: {
            team1players:  [
    'Jim','Aunt','Mbugua','Stecy','Penina','Moses','ryan','grace','kim','mary',
    'jimna',
                           ],
            team2players:[
    'Peter','Gitau','Treshia','Wamaitha','Wanyoike','teresa','wanjiru','Hamprey','gicharu', 'wambui','Njeri',
                         ],
          },



    subPlayers:{
        Team1Sub:[
                 'zion','Reign','elani'
                 ],
        Team2Sub:[
            'whitney','Doll','miriam'
                 ]
               },
    score: '4:0',
    scored: ['Jimna', 'Jimna', 'Jimna',
    'ryan'],
    date: 'Nov 9th, 2037',
    time:'2348hrs',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    playerWinner: function(id){
        console.log(`GAME OVER at ${endtime}. the ${b} beat the ${r} with ${finalresult} scored by ${A},${B},${C} and ${D}`);
    },
    };
   
console.log(`.....................................................`)
////////////////////////////team 1 players

let team1Players=[...game.players.team1players];
//console.log(team1Players);
//destructing
 [GK,...teamPlayers1]=team1Players;
console.log(GK,teamPlayers1);
//display players
console.log(`team 1 starting 11`);
for(const bluesPlayers of team1Players.entries()){
    const [a,b]=bluesPlayers
    console.log(a+1,b);
    //console.log(bluesPlayers);
}

//display sub players
const subplayer1=game.subPlayers.Team1Sub;
console.log(subplayer1);

console.log(`team1 substitutes`);
for(const bluesSubs of subplayer1.entries()){
    //console.log(bluesSubs);
    const [a,b]=bluesSubs;
    console.log(a+1,b);
    
}

   

newteam1Players=[...game.players.team1players,...game.subPlayers.Team1Sub];
console.log(newteam1Players);
for(const allblues of newteam1Players.entries()){
    //console.log(allblues);
    const [a,b]=allblues;
    console.log(a+1,b);
}
console.log(`.........................................................`);

/////////team 2 players
let team2Players=[...game.players.team2players];
//console.log(team2Players)
//destructing
[GK,...teamplayers2]=team2Players
console.log(GK,teamplayers2);
console.log(`team 2 starting 11`);
for(const redsPlayers of team2Players.entries()){
//console.log(redsPlayers);
const [a,b]=redsPlayers;
    console.log(a+1,b);
}

console.log(`team 2 substitutes`);
for(const redsSubs of game.subPlayers.Team2Sub.entries()){
    //console.log(redsSubs);
    const [a,b]=redsSubs;
    console.log(a+1,b);

}

newteam2Players=[...game.players.team2players,...game.subPlayers.Team2Sub];
console.log(newteam2Players);
for(const allReds of newteam2Players.entries()){
    const [a,b]=allReds
    console.log(a+1,b);
}

console.log(`...........................................................`);
//////////displaying all fieldplayers(22)
//joining arrays
console.log(`all the 22 players in the field`);
const allPlayers=[...game.players.team1players,...game.players.team2players];
console.log(allPlayers);

//display all players
//const playersAttends=Object.values(allPlayers);
for(const all of allPlayers.entries()){
    //console.log(all);
    const [a,b]=all;
    console.log(a+1,b);
}

console.log(`...................................................`);
//////////displaying team1players and their subs




console.log(`...................................................`);
/////////////////////////displaying the odds

//comparing odds
/*let blues= [team1]<[team2] && [team1]<[draw]
let reds=[team2]<[team1] && [team2]<[draw];
let draws=[draw]<[team1] && [draw]<[team2];

console.log(blues,reds,draws);*/


console.log(`bet now:ODDS INCLUDE`)
let odd={...game.odds};
console.log(odd);
//destructing
const{team1,x:draw,team2}=odd;
console.log(`team 1 has: (${team1}) odds,draw has: (${draw}) odds and
 team 2 has: (${team2}) odds`);

 /*odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,*/
////////////////average score of odds
    let avg=0;
 for(const oddsentries of Object.values(game.odds) )
    avg+=oddsentries;
    avg/=Object.values(game.odds).length;
    console.log(`Average odd score=${avg}`);

    ////////display
   
    


for(const [team,odds] of Object.entries(game.odds)){
    const teamstr=team==='x'?'draw':`Victory ${game[team]}`;
    console.log(`Odd of ${teamstr} :${odds}`);
}

    /*3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5*/ 
 

 console.log(`...................................................`);
////////////////displaying the players who scored

console.log(`players who scored`);
  let scorer=[...game.scored];
 console.log(scorer);
 //destructuring
 let [A,B,C,D]=scorer;
 console.log(A,B,C,D);

for(const beststrikers of scorer){
    console.log(beststrikers);

}



for(const beststrikers of scorer.entries()){
    [index,val]=beststrikers;

    console.log(`Goal ${index +1}: ${val}`);
}

 //scored: ['Jim', 'Jim', 'Jim',

 console.log(`...................................................`);

///////////////////displaying the final result,date,time,id
const finalresult=game.score;
console.log(` the end results`);
const endtime=game.date;
const id=game.gameid;
console.log(`Game ID(${id}) full time:`)

console.log(`${game.team1} ${finalresult} ${game.team2} ended at ${game.time} on ${endtime} `);

console.log(`...................................................`);



console.log(`...................................................`);


console.log(`...................................................`);

//selecting team
const b=game.team1;
console.log(b);

const r=game.team2;
console.log(r);

console.log(`...................................................`);

//selecting teamwinner
const teamwinner=game.playerWinner();
console.log(teamwinner);

console.log(`...................................................`);


/*
//printing the likely winner
 let probabilitywinner=blues || reds|| draws;
 console.log(`The ${probabilitywinner} has high probability of winning`);

//team1<team2 && console.log(`team1 is likely to win`);
*/
team1<team2 && game.team1;
console.log(`${game.team1} has a high probability of win`);


console.log(`..............looping the events of the game...........`);

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
    ]);



























    