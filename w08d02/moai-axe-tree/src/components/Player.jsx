import React, { useEffect } from 'react';
import { announceResult, getRobotChoice } from '../helpers/helpers';

const resetState = (setState) => {
  setState(prevState => ({
      ...prevState,
      playerSelection: null,
      compSelection: null,
      status: 'Waiting'
    }
  ));
};

const Player = (props) => {
  const {playerSelection, compSelection, cheating} = props.state;
  const {setState} = props;
  const options = [
    ['Moai', '🗿'],
    ['Axe', '🪓'],
    ['Tree', '🌳']
  ];

  useEffect(() => {
    if(playerSelection && compSelection){
      const status = announceResult(playerSelection, compSelection);
      setState(prevState => ({ ...prevState, status }));
    }
  }, [playerSelection, compSelection, setState]);

  useEffect(() => {
    if (playerSelection) {
      const compSelection = getRobotChoice(playerSelection, cheating);
      setState(prevState => ({ ...prevState, compSelection }));
    }
  }, [playerSelection, cheating, setState]);

  

  const registerPlayerItem = (value) => {
    setState(prevState => ({ ...prevState, playerSelection: value }));
  };

  return (
    <section className="player">
      <span
        role="img"
        aria-label="player"
        onClick={() => resetState(setState)}
      >👤</span>
      <div>
        <h1>Choose your destiny !</h1>
        <div className="choices">

          { options.map((option) => {
            const [choice, symbol] = option;
            return (
              <button
                onClick={() => registerPlayerItem(choice)}
                type="button"
                value={choice}
                key={choice}
              >
                <span
                  role="img"
                  aria-label={choice.toLowerCase()}
                >
                  {symbol}
                </span>
              </button>
            );
          }) }

        </div>
      </div>
    </section>
  );
};

export default Player;
