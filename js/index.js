const tBodyPlayers = document.getElementById('tBodyPlayers');
const btnAddUpdate = document.getElementById('btnAddUpdate');
document.body.onload = () => {
    const players = getPlayers();
    fillTable(players);
    
}

function fillTable(players){
    let trs = []
    //borrar
    players.forEach((p,i) => {
        const tr = createRow(p)

        trs.push(tr)
    });
    tBodyPlayers.append(...trs);
}

function createRow(p){
    const iDelete = document.createElement('i');
    iDelete.className = 'fa-solid fa-trash-can';
    const tdDelete = document.createElement('td');
    tdDelete.appendChild(iDelete);
    //actualizar
    const iUpdate = document.createElement('i');
    iUpdate.className = 'fa-solid fa-pen-to-square';
    const tdUpdate = document.createElement('td');
    tdUpdate.appendChild(iUpdate);
    //nombre
    const tdName = document.createElement('td');
    tdName.textContent = p.name;
    //nacionalidad
    const tdNacionality = document.createElement('td');
    tdNacionality.textContent = p.nacionality;
    //posicion
    const tdPosition = document.createElement('td');
    tdPosition.textContent = p.position;
    //edad
    const tdAge = document.createElement('td');
    tdAge.textContent = p.age;
    //meter todo en el tr
    const trPlayer = document.createElement('tr')
    trPlayer.append(
        tdDelete,
        tdUpdate,
        tdName,
        tdNacionality,
        tdPosition,
        tdAge
    )
    //meter tr dentro del body
    return trPlayer
}

btnAddUpdate.addEventListener('click',addUpdateClick)

function addUpdateClick(e){
    const valueName = document.getElementById('iName').value;
    const valueNacionality = document.getElementById('iNacionality').value;
    const valuePosition = document.getElementById('iPosition').value;
    const valueAge = parseInt(document.getElementById('iAge').value);

    const newPlayer = addPlayer(valueName,valueNacionality,valuePosition,valueAge);
    const row = createRow(newPlayer);
    tBodyPlayers.appendChild(row);
    alert('Player Created');
    document.getElementById("iName").value = "";
    document.getElementById("iNacionality").value = "";
    document.getElementById("iPosition").value = "";
    document.getElementById("iAge").value = "";
    e.preventDefault()
}