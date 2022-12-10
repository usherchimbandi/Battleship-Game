import './style.css'


// All existing elements on our document
function elems() {
    const overlay = document.querySelector('.overlay');
    const gameboard1 = document.querySelector('#player1');
    const gameboard2 = document.querySelector('#player2');
    const nodesPlayer1 = document.querySelectorAll(`#player1 td[data-x]`);
    const nodesPlayer2 = document.querySelectorAll(`#player2 td[data-x]`);
    const allNodes = document.querySelectorAll(`td[data-x]`);
    const player1ShipNames = document.querySelectorAll('.player1-ship');
    const player2ShipNames = document.querySelectorAll('.player2-ship');
    const shipNamesP1 = document.querySelector('.table1 .ships');
    const shipNamesP2 = document.querySelector('.table2 .ships');
    const randomizePlayer1 = document.querySelector('.randomize-player1');
    const ships = document.querySelectorAll('.div');
    const message = document.querySelector('.message');
    const play = document.querySelector('.play');
    const reset = document.querySelector('.reset');
    const win = document.querySelector('.win');
    const text = document.querySelector('.text');

    return {
        gameboard1, gameboard2, nodesPlayer1, nodesPlayer2, player1ShipNames, player2ShipNames, randomizePlayer1, ships,
        message, play, allNodes, overlay, shipNamesP1, shipNamesP2, reset, win, text
    }
}




// This function is used only when a ship has been sunk. It changes the status of the last blocks that haven't been changes yet,
// that we obviously should not click on. It finishes the diagonals() function's job
function a(b, arr, direction, forCom = false) {
    const top = [...b].find(t => Number(t.dataset.x) === Number(arr[arr.length - 1].pos[0]) && Number(t.dataset.y) > Number(arr[arr.length - 1].pos[1]));
    const bottom = [...b].find(t => Number(t.dataset.x) === Number(arr[0].pos[0]) && Number(arr[0].pos[1]) - Number(t.dataset.y) == 1);
    const right = [...b].find(t => Number(t.dataset.x) > Number(arr[arr.length - 1].pos[0]) && Number(arr[arr.length - 1].pos[1]) == Number(t.dataset.y));
    const left = [...b].find(t => Number(arr[0].pos[0]) - Number(t.dataset.x) == 1 && Number(t.dataset.y) === Number(arr[0].pos[1]));
    if(direction == 'vertical') {
        if(top) {
            top.setAttribute('data-clicked', 'true')
            if(!forCom) {
                top.style.backgroundColor = '#686E8A';
                top.textContent = '';
            }
        }
        if(bottom) {
            bottom.setAttribute('data-clicked', 'true')
            if(!forCom) {
                bottom.style.backgroundColor = '#686E8A';
                bottom.textContent = '';
            }
        }
        
    }
    else if(direction == 'horizontal') {
        if(right) {
            right.setAttribute('data-clicked', 'true')
            if(!forCom) {
                right.style.backgroundColor = '#686E8A';
                right.textContent = '';
            }
        }
        if(left) {
            left.setAttribute('data-clicked', 'true')
            if(!forCom) {
                left.style.backgroundColor = '#686E8A';
                left.textContent = '';
            }
        }
    } else if(!direction) { // if the direction of the ship is null, meaning that the length of the ship is 1
        if(top) {
            top.setAttribute('data-clicked', 'true')
            if(!forCom) {
                top.style.backgroundColor = '#686E8A';
                top.textContent = '';
            }
        }
        if(bottom) {
            bottom.setAttribute('data-clicked', 'true')
            if(!forCom) {
                bottom.style.backgroundColor = '#686E8A';
                bottom.textContent = '';
            }
        }
        if(right) {
            right.setAttribute('data-clicked', 'true')
            if(!forCom) {
                right.style.backgroundColor = '#686E8A';
                right.textContent = '';
            }
        }
        if(left) {
            left.setAttribute('data-clicked', 'true')
            if(!forCom) {
                left.style.backgroundColor = '#686E8A';
                left.textContent = '';
            }
        }
    }

}



// This function fires after every click and changes the status
// of the blocks(that we obviously should not click on) that are diagonal(there's 4 of them) to the clicked node 
function diagonals(b, n, forCom = false) {
    const top = [...b].find(t => Number(t.dataset.x) === Number(n.dataset.x) && Number(t.dataset.y) > Number(n.dataset.y));
    if(top) {
        const topLeft = [...b].find(t => Number(top.dataset.x) - Number(t.dataset.x) == 1 && Number(t.dataset.y) === Number(top.dataset.y));
        if(topLeft) {
            topLeft.setAttribute('data-clicked', 'true')
            if(!forCom) {
                topLeft.style.backgroundColor = '#686E8A';
                topLeft.textContent = '';
            }
        }
        const topRight = [...b].find(t => Number(t.dataset.x) > Number(top.dataset.x) && Number(t.dataset.y) === Number(top.dataset.y));
        if(topRight) {
            topRight.setAttribute('data-clicked', 'true')
            if(!forCom) {
                topRight.style.backgroundColor = '#686E8A';
                topRight.textContent = '';
            }
        }
    }
    const bottom = [...b].find(t => Number(t.dataset.x) === Number(n.dataset.x) && Number(n.dataset.y) - Number(t.dataset.y) == 1);
    if(bottom) {
        const bottomLeft = [...b].find(t => Number(bottom.dataset.x) - Number(t.dataset.x) == 1 && Number(t.dataset.y) === Number(bottom.dataset.y));
        if(bottomLeft) {
            bottomLeft.setAttribute('data-clicked', 'true');
            if(!forCom) {
                bottomLeft.style.backgroundColor = '#686E8A';
                bottomLeft.textContent = '';
            }
        }
        const bottomRight = [...b].find(t => Number(t.dataset.x) > Number(bottom.dataset.x) && Number(t.dataset.y) === Number(bottom.dataset.y));
        if(bottomRight) {
            bottomRight.setAttribute('data-clicked', 'true')
            if(!forCom) {
                bottomRight.style.backgroundColor = '#686E8A';
                bottomRight.textContent = '';
            }
        }
        
    }
}


// Everytime we or the computer misses a ship, the following css changes will be made to the spot/node that's been hit
function miss(node) {
    node.textContent = 'Miss';
    node.classList.add('miss');
}



// this function will place the ships on the webpage
function createShip(node, direction, length) {
    const div = document.createElement('div');
    div.classList.add('div');
    const div2 = document.createElement('div');
    div2.classList.add('ship');
    
    if(direction == 'vertical') { // if vertical
        div2.style.position = 'absolute';
        if(length == 4) div2.style.height = 'calc(400% + 6px)';
        else if(length == 3) div2.style.height = 'calc(300% + 4px)';
        else if(length == 2) div2.style.height = 'calc(200% + 2px)';
        else if(length == 1) div2.style.height = '100%';
    } 
    else if(direction == 'horizontal') { // if horizontal
        div2.style.position = 'absolute';
        if(length == 4) div2.style.width = 'calc(400% + 6px)';
        else if(length == 3) div2.style.width = 'calc(300% + 4px)';
        else if(length == 2) div2.style.width = 'calc(200% + 2px)';
        else if(length == 1) div2.style.width = '100%';
    }
    else if(!direction) div2.style.width = '100%';

    div.append(div2);
    node.append(div)
}



function g(node) {
    const right = [...elems().nodesPlayer1].find(t => Number(t.dataset.x) > Number(node.dataset.x) && Number(node.dataset.y) == Number(t.dataset.y));
    const left = [...elems().nodesPlayer1].find(t => Number(node.dataset.x) - Number(t.dataset.x) == 1 && Number(t.dataset.y) === Number(node.dataset.y));
    const top = [...elems().nodesPlayer1].find(t => Number(node.dataset.x) === Number(t.dataset.x) && Number(t.dataset.y) > Number(node.dataset.y));
    const bottom = [...elems().nodesPlayer1].find(t => Number(node.dataset.x) === Number(t.dataset.x) && Number(node.dataset.y) - Number(t.dataset.y) == 1);

    return {right, left, top, bottom}
}


// This function messesaround with the ship names below the boards
function hitt(player, individualShipNames, shipNamesContainer,) {
    [...individualShipNames].forEach(w => w.remove());
    for(let i = 0; i < player.gameboard.ships.length; i++) {
        const p = document.createElement('p');
        p.textContent = player.gameboard.ships[i].name();
        p.classList.add(`${player.player}-ship`);
        if(player.gameboard.ships[i].length == 0) p.classList.add('destroyed'); 
        shipNamesContainer.append(p)
    }
}



// This function creates the ship names below the boards
function o(player, shipNames) {
    for(let i = 0; i < player.gameboard.ships.length; i++) {
        const p = document.createElement('p');
        p.textContent = player.gameboard.ships[i].name();
        p.classList.add(`${player.player}-ship`);
        shipNames.append(p)
    }
}



// This function places the ships on the document
function place(ships) {
    for(let i = 0; i < ships.length; i++) {
        const nodes = elems().nodesPlayer1;
        const coord = ships[i][0].pos; // array
        const c = [...nodes].find(n => Number(n.dataset.x) == coord[0] && Number(n.dataset.y) == coord[1]);
        let direction;
        if(ships[i].length == 1) {

        }
        else if(ships[i][0].pos[1] == ships[i][1].pos[1]) direction = 'horizontal'
        else if(ships[i][0].pos[0] == ships[i][1].pos[0]) direction = 'vertical'
        createShip(c, direction, ships[i].length)
    }
}



export { elems, a, diagonals, place, o, hitt, g, createShip, miss};