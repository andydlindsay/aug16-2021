import { announceResult, getRobotChoice } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('getRobotChoice function', () => {

  test('when cheating is true, always returns the winning item', () => {
    const playerChoice = 'Moai';
    const cheating = true;
    const actual = getRobotChoice(playerChoice, cheating);
    expect(actual).toBe('Tree');
  });

  test('when cheating is false, returns a random item', () => {
    const playerChoice = 'Axe';
    const cheating = false;
    const actual = getRobotChoice(playerChoice, cheating);

    const options = ['Moai', 'Axe', 'Tree'];
    expect(options).toContain(actual);
  });

});
