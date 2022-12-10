import { Ship, gameboard, player } from './script';

test('Test hit function on objects', () => {
    const mockShip = new Ship(4);
    expect(mockShip.hit()).toBe(mockShip.numberOfTimesHit)
});

test('Test isSunk function on objects', () => {
    const mockShip = new Ship(1);
    mockShip.hit();
    expect(mockShip.isSunk()).toBe(true)
});