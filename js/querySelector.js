function setAdd(player) {
    player.style.border = '1px solid blue';
    player.style.margin = '10px'
    player.style.padding = '10px'
    player.style.borderRadius = '10px'
}
const players = document.getElementsByClassName('players');
for (const player of players) {
    setAdd(player)

}

function addPlayer() {
    const playerAdd = document.getElementById('play')
    const player = document.createElement('div');
    player.classList.add('players');
    player.innerHTML = `
    <h1 class="player">New player</h1>
 <p class="player-name">Doloremque quam ad voluptatum deserunt debitis repellendus laboriosam, nemo ratione explicabo libero? Cum, ratione vel! Quo quis harum beatae architecto, natus eos earum mollitia eveniet quaerat asperiores minima nihil praesentium!</p>
    `
    playerAdd.appendChild(player)
    setAdd(player)

}
document.getElementById('play').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow'
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})