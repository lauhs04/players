
const players = [
    new Players('James Rodriguez','Colombia','CAM/RW',30),
    new Players('Harry Maguire','England','CB',28),
    new Players('Luuk de Jong','Netherland','ST',31),
    new Players('Vinicius Junior','Brazil','LW',21),
    new Players('Limitao','Brazil','CB',24)
]

function getPlayers(){
    return players
}

function addPlayer(name,nacionality,position,age){
    const newPlayer = new Players(name,nacionality,position,age)
    players.push(newPlayer);
    return newPlayer
}