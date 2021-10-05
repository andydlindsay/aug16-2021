import React from 'react';
import { render, getByTestId, fireEvent, prettyDOM } from '@testing-library/react';
import Result from '../Result';

// import the library we want to fake
import axios from 'axios';

// tell jest to fake the library
jest.mock('axios');

// setup fake data (fixture)
const data = [
  {
    id: 1,
    name: 'Alice',
    points: 15
  },
  {
    id: 2,
    name: '123bobFuzzyWord123',
    points: 10
  },
  {
    id: 3,
    name: 'Carol',
    points: 5
  },
];

test('it can render high scores fetched from an API', () => {
  // setup a fake return value for an axios request
  axios.get.mockResolvedValue({ data });

  // render the Result component
  const {getByTestId, findByText, container, debug} = render(<Result status="Waiting" />);

  // console.log(prettyDOM(container));
  // debug();

  // grab the high score button
  const highScoreButton = getByTestId('high-scores');

  // click on the high score button
  fireEvent.click(highScoreButton);

  // test to see if "Bob" is in the DOM
  return findByText('Bob', { exact: false });
});


test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});
