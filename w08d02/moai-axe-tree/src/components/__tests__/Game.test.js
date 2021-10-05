import React from 'react';
import Game from '../Game';
import { render, fireEvent } from '@testing-library/react';

describe('tests for the Game component', () => {

  test('it can toggle the cheating state when robot head is clicked', () => {
    // render the Game component
    const { getByTestId } = render(<Game />);
    
    // find the robot head icon in the DOM
    const robotHead = getByTestId('robot-head');

    // click the robot head icon
    fireEvent.click(robotHead);
    
    // check if the robot head has the class "cheating"
    expect(robotHead).toHaveClass('cheating');
    
    // click on the robot head icon again
    fireEvent.click(robotHead);
    
    // check if the robot head doesn't have the class "cheating"
    expect(robotHead).not.toHaveClass('cheating');
  });

});
