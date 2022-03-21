import Team from '../team';
import Bowerman from '../characters/bowerman';
import Daemon from '../characters/daemon';
import Magician from '../characters/magician';

const playerBowerman = new Bowerman('player1');
const playerDaemon = new Daemon('player2');
const playerMagician = new Magician('player3');

test('method add of class Team should throw error', () => {
  const newteam = new Team();
  newteam.add(playerBowerman);
  expect(() => {
    newteam.add(playerBowerman);
  }).toThrowError(new Error(`игрок ${playerBowerman.name} уже есть в комнаде`));
});

test('method add of class Team should constructs Set', () => {
  const newteam = new Team();
  newteam.add(playerBowerman);
  newteam.add(playerDaemon);
  const expected = new Set([
    {
      attack: 25, defence: 25, health: 100, level: 1, name: 'player1', type: 'bowerman',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'player2', type: 'daemon',
    },
  ]);
  expect(newteam.members).toEqual(expected);
});

test('method addAll of class Team should constructs Set', () => {
  const newteam = new Team();
  newteam.addAll(playerBowerman, playerDaemon, playerMagician);
  const expected = new Set([
    {
      attack: 25, defence: 25, health: 100, level: 1, name: 'player1', type: 'bowerman',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'player2', type: 'daemon',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'player3', type: 'magician',
    },
  ]);
  expect(newteam.members).toEqual(expected);
});

test('method toArray of class Team should constructs array', () => {
  const newteam = new Team();
  newteam.addAll(playerBowerman, playerDaemon);
  const expected = [
    {
      attack: 25, defence: 25, health: 100, level: 1, name: 'player1', type: 'bowerman',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'player2', type: 'daemon',
    },
  ];
  expect(newteam.toArray()).toEqual(expected);
});

test('class Team should be iterable', () => {
  const newteam = new Team();
  newteam.addAll(playerBowerman, playerDaemon, playerMagician);
  const expected = [
    {
      attack: 25, defence: 25, health: 100, level: 1, name: 'player1', type: 'bowerman',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'player2', type: 'daemon',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'player3', type: 'magician',
    },
  ];
  const result = [];
  for (const item of newteam) {
    result.push(item);
  }
  expect(result).toEqual(expected);
});