import './style.css'
import { gameLoop, play } from './play';
import { elems } from './dom';

let obj = {gameL: gameLoop()}

elems().play.addEventListener('click', play); // when we click on play, the following happens

export { obj };
