import { f, l } from './com';
import { elems, a, diagonals, place, o, hitt, g, createShip, miss} from './dom';
import { obj } from './script';
import './style.css';

function play() {
    let attacked;
    let directio;
    let chosen;

    elems().play.style.display = 'none';
    elems().reset.style.display = 'block';
    elems().message.textContent = "Your turn";
    elems().randomizePlayer1.style.display = 'none';
    const player1 = obj.gameL.player1;
    player1.player = 'player1';
    const player2 = obj.gameL.player2;
    // console.log(player2.gameboard.ships);
    player2.player = 'player2';

    let comPlayed = {status: true}; // this makes sure that I don't play if the com hasn't played yet

    elems().reset.addEventListener('click', e => {
        restart(comPlayed);
    });


    elems().win.addEventListener('click', e => {
        restart(comPlayed);
        elems().overlay.style.display = 'none';
    });


    elems().allNodes.forEach(i => i.setAttribute('data-clicked', 'false'));// both gameboards will have nodes with a data-clicked status of false
    // after each block is clicked, its status changes from false to true
    elems().nodesPlayer2.forEach(i => {
        i.addEventListener('click', e => {
            // console.log(e);
            if(e.target.getAttribute('data-clicked') == 'false' && comPlayed.status) { // we first check if the block we clicked has a status of false, if not, nothing happens
                comPlayed.status = false;
                e.target.setAttribute('data-clicked', 'true');
                const attack = [Number(e.target.dataset.x), Number(e.target.dataset.y)] // the coordinate we attacked
                player1.nodesAttacked.push(attack); // not sure if i still need this
                const o = player2.gameboard.receiveAttack(attack); // the opponent gameboard receives our attack
                // the above variable(o) returns the ship hit if a ship was hit
                if(o == 'missed') { // the following occurs if we missed
                    elems().message.textContent = "Player2's turn";
                    miss(e.target); // the dom necessary when we miss
                    let hit = {s: true};
                    const player2ChosenNode = f(player2);

                        if(attacked) {
                            let directions = [g(attacked).top, g(attacked).left, g(attacked).right, g(attacked).bottom].filter(i => i); 
                            console.log(directions);
                            if(directions.every(i => i.getAttribute('data-clicked') == 'true')) {
                                const direction = ['top', 'left', 'bottom', 'right'][Math.floor(Math.random() * 4)];
                                const amo = l(player2, player1, player2ChosenNode.node, direction, comPlayed, hit);
                                if(amo.length == 1) {
                                    attacked = amo[0];
                                } else attacked = undefined;
                            } else {
                                chosen = directions[Math.floor(Math.random() * directions.length)]; // choose a node in any direction
                                console.log(chosen);
                                while(chosen.getAttribute('data-clicked') == 'true') { // find the node that is valid to click
                                    chosen = directions[Math.floor(Math.random() * directions.length)];
                                }
                                if(Number(chosen.dataset.x) > Number(attacked.dataset.x)) directio = 'right' // direction is right
                                else if(Number(chosen.dataset.x) < Number(attacked.dataset.x)) directio = 'left' // direction is left
                                else if(Number(chosen.dataset.y) > Number(attacked.dataset.y)) directio = 'top' // direction is top
                                else if(Number(chosen.dataset.y) < Number(attacked.dataset.y)) directio = 'bottom' // direction is bottom
                                const amo = l(player2, player1, chosen, directio, comPlayed, hit);
                            }
                        } else {
                            const direction = ['top', 'left', 'bottom', 'right'][Math.floor(Math.random() * 4)];
                            const amo = l(player2, player1, player2ChosenNode.node, direction, comPlayed, hit);
                            if(amo.length == 1) {
                                attacked = amo[0];
                            } else attacked = undefined;
                        }
                        // console.log(player2);
                        if(player1.gameboard.shipsSunk.length == 10) { // if all our ships have been sunk
                            elems().overlay.style.display = 'flex';
                            elems().text.textContent = 'You lose';
                        }

                    // }
                } else { // if we hit a ship
                    hitt(player2, elems().player2ShipNames, elems().shipNamesP2);

                    // console.log(player2);
                    // This diagonals function works the same as the above loop, but this one fires after every click and only changes the status
                    // of the blocks(that we obviously should not click on) that are diagonal(there's 4 of them) to the clicked node 
                    diagonals(elems().nodesPlayer2, e.target);
                    // The following css changes apply the X feature on a ship that's been hit
                    e.target.style.position = 'relative';
                    e.target.classList.add('y');
                    comPlayed.status = true;

                    // This for loop is to change the status of all nodes that should obviously not be clicked, to true and also change their color
                    // for(let i = 0; i < player2.gameboard.shipsSunk.length; i++) { // this loop only fires when a ship has been sunk
                    if(player2.gameboard.shipsSunk[0]) {
                        a(elems().nodesPlayer2, player2.gameboard.shipsSunk[0].coord, player2.gameboard.shipsSunk[0].direction);
                    }
                    // console.log(player2.gameboard.shipsSunk[0]);
                    if(o.isSunk()) {
                        const coord = player2.gameboard.shipsSunk[0].coord[0].pos;
                        const node = [...elems().nodesPlayer2].find(i => Number(i.dataset.x) == coord[0] && Number(i.dataset.y) == coord[1]);
                        createShip(node, player2.gameboard.shipsSunk[0].direction, player2.gameboard.shipsSunk[0].originalLength);
                    }
                    // }

                    // This is the screen that shows when there is a winner. Still in progress...
                    if(player2.gameboard.shipsSunk.length == 10) {
                        elems().overlay.style.display = 'flex';
                        elems().text.textContent = 'You win';
                    }
                }
            }
        });
    });
}


// This constructor function is for each ship on the gameboard
function Ship(length) {  
    this.originalLength = length;
    this.direction = null;
    this.coord = [];
    this.length = length;
    this.numberOfTimesHit = 0;
    this.hit = function() {
        this.numberOfTimesHit += 1;
        this.length -= 1;
        return this.numberOfTimesHit
    }
    this.isSunk = function() {
        // if(this.originalLength === this.numberOfTimesHit) {
        if(this.length == 0) {
            // this.sunk = true;
            // return this.sunk
            return true
        } else return false
    }
    this.name = function() {
        if(this.originalLength == 4) return `Battleship (${this.length})` 
        else if(this.originalLength == 3) return `Submarine (${this.length})`
        else if(this.originalLength == 2) return `Cruiser (${this.length})`
        else if(this.originalLength == 1) return `Cannon (${this.length})`;
    }
}


// This constructor function is for each block/node on the board
function Node(pos) {
    this.pos = pos; // The node's coordinates
    this.ship = null; // Whether or not its occupying a ship
    this.status = 'unoccupied';
}


function Gameboard() {
    this.board = board(); // array containing all 100 blocks/nodes 
    this.ships = ships(); // array with all the ships in the gameboard. There's 10 of them
    this.missedAttacks = [];
    this.shipsSunk = [];
    this.placeShips = function() { // places the ships on the board randomly
        let occupied = []; // this array will later contain all nodes being occupied by ships
        for(let i = 0; i < this.ships.length; i++) {
            const chosenDirection = ['vertical', 'horizontal'][Math.floor(Math.random() * 2)]; // Choose between horizontal and vertical
            let node = this.board[Math.floor(Math.random() * 101)]; // choose random node from board
            while(!node || !(node.pos[0] <= (10 - this.ships[i].length) + 1) || helper(node, this.ships[i].length, this.board, chosenDirection)) {
                // This while loop checks for when our node is null, when there isn't enough space for our ship to fill in the specified nodes,
                // and for when the upcoming nodes are occupied or not.
                // If even one of these conditions are true, our node will keep on changing until we have the ideal node which along with its
                // upcoming nodes, can fit the ship and along with its upcoming nodes and surrounding nodes, are unoccupied
                node = this.board[Math.floor(Math.random() * 101)];
            }
            const nextNodes = findNextNodes(node, this.ships[i].length, this.board, chosenDirection); // an array containing the next nodes including our current node
            node.status = 'occupied';
            occupied.push(nextNodes);
            nextNodes.forEach(n => {
                n.status = 'occupied';
                n.ship = this.ships[i]; // all nodes in nextNodes will have a link to our ship
                this.ships[i].coord.push(n);
                if(this.ships[i].length > 1) this.ships[i].direction = chosenDirection;

                // All the code below makes sure that all the nodes surrounding our ship become occupied so that they aren't available for use by
                // any other ships
                // This code is applied on each individual node that has a link to our ship
                let top, topLeft, topRight, bottom, bottomLeft, bottomRight, left, right;
                top = this.board.find(y => y.pos[0] === n.pos[0] && y.pos[1] > n.pos[1]);
                if(top) topLeft = this.board.find(y => top.pos[0] - y.pos[0] == 1 && y.pos[1] === top.pos[1]);
                if(top) topRight = this.board.find(y => y.pos[0] > top.pos[0] && y.pos[1] === top.pos[1]);
                bottom = this.board.find(y => y.pos[0] === n.pos[0] && n.pos[1] - y.pos[1] == 1);
                if(bottom) bottomLeft = this.board.find(y => bottom.pos[0] - y.pos[0] == 1 && y.pos[1] === bottom.pos[1]);
                if(bottom) bottomRight = this.board.find(y => y.pos[0] > bottom.pos[0] && y.pos[1] === bottom.pos[1]);
                left = this.board.find(y => n.pos[0] - y.pos[0] == 1 && y.pos[1] === n.pos[1]);
                right = this.board.find(y => y.pos[0] > n.pos[0] && y.pos[1] === n.pos[1]);
                [top, topLeft, topRight, bottom, bottomLeft, bottomRight, left, right].forEach(t => {
                    if(t) t.status = 'occupied';
                });
            });
        }
        return occupied
    }

    // This function takes in a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the 
    // correct ship, or records the coordinates of the missed shot.
    this.receiveAttack = function([x, y]) { // coordinates is an array of x and y
        const nodeAtCoordinate = this.board.find(i => i.pos[0] === x && i.pos[1] === y);
        if(nodeAtCoordinate.ship){ // if the node at the specified coordinate is occupied by a ship
            nodeAtCoordinate.ship.hit();
            if(nodeAtCoordinate.ship.isSunk()) {
                // this.ships.splice(this.ships.indexOf(nodeAtCoordinate.ship), 1); // once a ship has been sunk, it will be removed from the gameboard array of ships
                this.shipsSunk.unshift(nodeAtCoordinate.ship); // once a ship has been sunk, it will be added to the shipsSunk array
                // if(this.shipsSunk.length == 10) return 'All ships have been destroyed';
            }
            return nodeAtCoordinate.ship
        }  
        else {
            this.missedAttacks.push([x, y]);
            return 'missed'
        }
    }
}


function Player() {
    this.player = null;
    this.nodesAttacked = [];
    this.shipsDestroyed = [];
    this.gameboard = new Gameboard();
    this.attack = function([x, y]) {
        return [x, y]
    }
}


// Picks a random coordinate to attack
// Checks if that coordinate has been attacked, if so, choose another one
function computerPlay(nodesAttacked) {
    let random = [Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)];
    while(random[0] == 0 || random[1] == 0 || isArrayInArray(nodesAttacked, random)) {
        random = [Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)];
    }
    return random
}



// This function creates our board
function board() {
    const arr = [];
    for(let y = 1; y < 11; y++) {
        for(let x = 1; x < 11; x++) {
            const node = new Node([x, y]);
            arr.push(node);
        }
    }
    return arr
}


// This function checks to see if the next nodes are occupied by ships or not
// It returns False if they're not occupied and true if any one of them is occupied
// The length parameter/argument is responsible for checking the number of upcoming nodes
function helper(node, length, board, direction) {
    let queue = [node];
    for(let i = 0; i < length; i++) {
        if(direction == 'horizontal') {
            if(queue[0].status == 'unoccupied') {
                const next = board.find(i => i.pos[0] > queue[0].pos[0] && i.pos[1] === queue[0].pos[1]);
                if(next) queue.push(next)
                else return true
                queue.shift();
            }
            else return true
        }
        else {
            if(queue[0].status == 'unoccupied') {
                const next = board.find(i => i.pos[0] === queue[0].pos[0] && i.pos[1] > queue[0].pos[1]);
                if(next) queue.push(next)
                else return true
                queue.shift();
            }
            else return true
        }
    }
    return false
}


// This function returns an array of the nodes that come after the specified node
// The specified node is included in this array
function findNextNodes(node, length, board, direction) {
    let queue = [node];
    let arr = [node];
    for(let i = 0; i < length - 1; i++) {
        if(direction == 'horizontal') {
            const nextNode = board.find(i => i.pos[0] > queue[0].pos[0] && i.pos[1] === queue[0].pos[1]);
            arr.push(nextNode);
            queue.push(nextNode);
            queue.shift();
        } else {
            const nextNode = board.find(i => i.pos[0] === queue[0].pos[0] && i.pos[1] > queue[0].pos[1]);
            arr.push(nextNode);
            queue.push(nextNode);
            queue.shift();
        }
    }
    return arr.filter(i => i);
}


// This function build all our ships(10 of them) and holds them inside an array
function ships() {
    const arr = [];
    const arr2 = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]; // these are the lengths of all the ships in the online game, Battleship
    for(let i = 0; i < arr2.length; i++) {
        const node = new Ship(arr2[i]);
        arr.push(node);
    }
    return arr
}



// This function start the game
function gameLoop() {
    let player1 = new Player();
    let player2 = new Player();
    player1.player = 'player1';
    player2.player= 'player2';
    let player1Ships = player1.gameboard.placeShips(); // returns an array of the nodes occupied by ships
    let player2Ships = player2.gameboard.placeShips(); // returns an array of the nodes occupied by ships
    place(player1Ships); // places the ships on the webpage
    // console.log(player1Ships);

    elems().randomizePlayer1.addEventListener('click', e => {
        const allShips = [...elems().ships]; // get all ships(divs) from the document
        allShips.forEach(i => i.remove()); // remove all ships from the document
        player1.gameboard.board = board(); // create a new board with unoccupied nodes
        player1Ships = player1.gameboard.placeShips();
        place(player1Ships);
    });
    
    o(player1, elems().shipNamesP1);
    o(player2, elems().shipNamesP2);

    return {player1, player2, player1Ships, player2Ships}
}


function restart(comPlayed) {
    comPlayed.status = false;
    elems().play.style.display = 'block';
    elems().reset.style.display = 'none';
    elems().message.textContent = "Place the ships";
    elems().randomizePlayer1.style.display = 'block';
    [...elems().player1ShipNames].forEach(w => w.remove());
    [...elems().player2ShipNames].forEach(w => w.remove());
    [...elems().ships].forEach(i => i.remove());
    [...elems().allNodes].forEach(i => {
        i.textContent = '';
        i.classList.remove('y');
        i.setAttribute('data-clicked', 'false');
        i.style.backgroundColor = '#B1DEF6';
        i.classList.remove('miss');
    });
    obj.gameL = gameLoop();
}


function isArrayInArray(arr, item){
    var item_as_string = JSON.stringify(item);
   
    var contains = arr.some(function(ele){
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
}




export { 
    play, Ship, Node, Gameboard, isArrayInArray, 
    restart, gameLoop, findNextNodes, ships, helper, board, computerPlay, Player 
};