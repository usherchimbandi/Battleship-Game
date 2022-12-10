import { elems, a, diagonals, hitt, miss} from './dom';
import { computerPlay } from './play';
import './style.css';


// This function takes care of choosing a coordinate, then the node at that coordinate to attack and then returns both the coordinate and node.
function f(player2) {
    let com = computerPlay(player2.nodesAttacked); // returns coordinate to attack 
    let node = [...elems().nodesPlayer1].find(i => Number(i.dataset.x) == com[0] && Number(i.dataset.y) == com[1]);// finds the node matching the attacked coordinate
    while(node.getAttribute('data-clicked') == 'true') {// if the coordinate the com came up with has already been destroyed, it'll find another one
        com = computerPlay(player2.nodesAttacked);
        node = [...elems().nodesPlayer1].find(i => Number(i.dataset.x) == com[0] && Number(i.dataset.y) == com[1]);
    }
    return {com, node}
}


// This function takes care of all moves made by the com and plays adjacent moves after each hit
function l(player2, player1, node, direction, comPlayed, hit, arr = []) {
	// if(!node || node.getAttribute('data-clicked') == 'true') return
	// else {
        // The next 4 conditions check if the chosen node is touching any one of the walls and that the direction chosen doesn't move out the grid
        // If true, a new direction will be chosen. The new direction cannot be the same as the old one.
        if(Number(node.dataset.y) == 1 && direction == 'bottom') {
            const direction = ['top', 'left', 'right'][Math.floor(Math.random() * 3)];
            return l(player2, player1, node, direction, comPlayed, hit, arr);
        } else if(Number(node.dataset.x) == 1 && direction == 'left') {
            const direction = ['top', 'bottom', 'right'][Math.floor(Math.random() * 3)];
            return l(player2, player1, node, direction, comPlayed, hit, arr);
        } else if(Number(node.dataset.y) == 10 && direction == 'top') {
            const direction = ['bottom', 'left', 'right'][Math.floor(Math.random() * 3)];
            return l(player2, player1, node, direction, comPlayed, hit, arr);
        } else if(Number(node.dataset.x) == 10 && direction == 'right') {
            const direction = ['top', 'left', 'bottom'][Math.floor(Math.random() * 3)];
            return l(player2, player1, node, direction, comPlayed, hit, arr);
        }
        // The following conditions specificallt take care of the moves of the com. Making adjacent moves after each hit where possible
        else {
            if(direction == 'right') {
                const right = [...elems().nodesPlayer1].find(t => Number(t.dataset.x) > Number(node.dataset.x) && Number(node.dataset.y) == Number(t.dataset.y));
                const com = [Number(node.dataset.x), Number(node.dataset.y)];
                const r = q(player1, node, comPlayed, hit, com);
                if(r == 'miss') return arr
                else {
                    if(arr.length >= 1) {

                    } else arr.unshift(node)
                }
                if(right.textContent == 'Miss') {
                    const direction = ['top', 'left', 'bottom'][Math.floor(Math.random() * 3)];
                    return l(player2, player1, node, direction, comPlayed, hit, arr);
                } else if(right.getAttribute('data-clicked') == 'true') {
                    const direction = ['top', 'left', 'bottom'][Math.floor(Math.random() * 3)];
                    const b = f(player2);
                    return l(player2, player1, b.node, direction, comPlayed, hit, arr);
                }
                return l(player2, player1, right, direction, comPlayed, hit, arr)
            } 
            else if(direction == 'left') {
                const left = [...elems().nodesPlayer1].find(t => Number(node.dataset.x) - Number(t.dataset.x) == 1 && Number(t.dataset.y) === Number(node.dataset.y));
                const com = [Number(node.dataset.x), Number(node.dataset.y)];
                const r = q(player1, node, comPlayed, hit, com);
                if(r == 'miss') return arr
                else {
                    if(arr.length >= 1) {
                        
                    } else arr.unshift(node)
                }
                if(left.textContent == 'Miss') {
                    const direction = ['top', 'bottom', 'right'][Math.floor(Math.random() * 4)];
                    return l(player2, player1, node, direction, comPlayed, hit, arr);
                } else if(left.getAttribute('data-clicked') == 'true') {
                    const direction = ['top', 'bottom', 'right'][Math.floor(Math.random() * 4)];
                    const b = f(player2);
                    return l(player2, player1, b.node, direction, comPlayed, hit,  arr);
                }
                return l(player2, player1, left, direction, comPlayed, hit,  arr)
            }
            else if(direction == 'top') {
                const top = [...elems().nodesPlayer1].find(t => Number(node.dataset.x) === Number(t.dataset.x) && Number(t.dataset.y) > Number(node.dataset.y));
                const com = [Number(node.dataset.x), Number(node.dataset.y)];
                const r = q(player1, node, comPlayed, hit, com);
                if(r == 'miss') return arr
                else {
                    if(arr.length >= 1) {
                        
                    } else arr.unshift(node)
                }
                if(top.textContent == 'Miss') {
                    const direction = ['left', 'bottom', 'right'][Math.floor(Math.random() * 4)];
                    return l(player2, player1, node, direction, comPlayed, hit, arr);
                } else if(top.getAttribute('data-clicked') == 'true') {
                    const direction = ['left', 'bottom', 'right'][Math.floor(Math.random() * 4)];
                    const b = f(player2);
                    return l(player2, player1, b.node, direction, comPlayed, hit, arr);
                }
                return l(player2, player1, top, direction, comPlayed, hit, arr)
            }
            else if(direction == 'bottom') {
                const bottom = [...elems().nodesPlayer1].find(t => Number(node.dataset.x) === Number(t.dataset.x) && Number(node.dataset.y) - Number(t.dataset.y) == 1);
                const com = [Number(node.dataset.x), Number(node.dataset.y)];
                const r = q(player1, node, comPlayed, hit, com);
                if(r == 'miss') return arr
                else {
                    if(arr.length >= 1) {
                        
                    } else arr.unshift(node)
                }
                if(bottom.textContent == 'Miss') {
                    const direction = ['top', 'left', 'right'][Math.floor(Math.random() * 4)];
                    return l(player2, player1, node, direction, comPlayed, hit, arr);
                } else if(bottom.getAttribute('data-clicked') == 'true') {
                    const direction = ['top', 'left', 'right'][Math.floor(Math.random() * 4)];
                    const b = f(player2);
                    return l(player2, player1, b.node, direction, comPlayed, hit, arr);
                }
                return l(player2, player1, bottom, direction, comPlayed, hit, arr)
            }
            else {
                const com = [Number(node.dataset.x), Number(node.dataset.y)];
                const r = q(player1, node, comPlayed, hit, com);
                if(r == 'miss') return arr
                else {
                    if(arr.length >= 1) {
                        
                    } else arr.unshift(node)
                }
                return l(player2, player1, node, direction, comPlayed, hit, arr)
            }
        }
    // } 
}


// This function is for when the com attacks a node 
function q(player1, node, comPlayed, hit, com) {
    if(node.getAttribute('data-clicked') == 'false') {
        const p = player1.gameboard.receiveAttack(com); // our gameboard receives an attack from the com
        if(p == 'missed') { // if the com missed
            node.setAttribute('data-clicked', 'true'); // the status of the node clicked by the com should be true now
            setTimeout(() => { // this setTimeout is used to slow down the moves of the computer
                if(comPlayed) comPlayed.status = true;
                elems().message.textContent = "Your turn";
                miss(node);
            }, 1000);
            if(hit) hit.s = false;
            return 'miss'
        } else { // if the com hits a ship
            hitt(player1, elems().player1ShipNames, elems().shipNamesP1);
            diagonals(elems().nodesPlayer1, node, true);
            for(let i = 0; i < player1.gameboard.shipsSunk.length; i++) { // this loop only fires when a ship has been sunk
                a(elems().nodesPlayer1, player1.gameboard.shipsSunk[i].coord, player1.gameboard.shipsSunk[i].direction, true);
            }
            node.setAttribute('data-clicked', 'true'); // the status of the node clicked by the com should be true now
            setTimeout(() => {
                if(comPlayed) comPlayed.status = true;
                elems().message.textContent = "Your turn";
                node.style.position = 'relative';
                node.classList.add('y');    
            }, 500);
            
        }
    }
}



/*
if(!attacked) {
    const player2ChosenNode = f(player2);
    const direction = ['top', 'left', 'bottom', 'right'][Math.floor(Math.random() * 4)];
    const p = q(player1, player2ChosenNode.node, comPlayed, hit, player2ChosenNode.com)
}
if(p == 'miss') {
    // next time it'll run the above steps until it hits a node
} else {
    attacked = the node it hit
    // array of all available surrounding nodes
    let nodeDirections = [g(attacked).top, g(attacked).left, g(attacked).right, g(attacked).bottom].filter(i => i); 
    console.log(nodeDirections);
    let arr = [];
    nodeDirections.forEach(i => {
        if(Number(i.dataset.y) > Number(attacked.dataset.y)) arr.push('top')
        if(Number(i.dataset.y) < Number(attacked.dataset.y)) arr.push('bottom')
        if(Number(i.dataset.x) > Number(attacked.dataset.x)) arr.push('right')
        if(Number(i.dataset.x) < Number(attacked.dataset.x)) arr.push('top')
    });
    console.log(arr);
    const chosenNode = nodeDirections[Math.floor(Math.random() * nodeDirections.length)]
    const directio;
    if(Number(attacked.dataset.y) < Number(chosenNode.dataset.y)) directio = 'top'
    else if(Number(attacked.dataset.y) > Number(chosenNode.dataset.y)) directio = 'bottom'
    else if(Number(attacked.dataset.x) < Number(chosenNode.dataset.x)) directio = 'right'
    else if(Number(attacked.dataset.x) > Number(chosenNode.dataset.x)) directio = 'left'
    const p = q(player1, chosenNode, comPlayed, hit, [Number(chosenNode.dataset.x), Number(chosenNode.dataset.y)])



}
*/


export { f, l, q };