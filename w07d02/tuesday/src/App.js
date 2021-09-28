// import React from 'react';
import './App.css';
import Header from './components/Header';
import HeaderWithChildren from './components/HeaderWithChildren';
import {useState} from 'react';

// let counter = 0;

const App = () => {
  // const arr = useState(0);
  // const counter = arr[0];
  // const counterUpdater = arr[1];
  const [counter, setCounter] = useState(0);

  const increment = (n) => {
    // counter += n;
    setCounter(counter + n); // setCounter(2);
    console.log(counter); // console.log(0);
  };

  return (
    <div className="App">
      {/* Header({message: '', moreStuff: ''}) */}

      <Header message={`The current count is: ${counter}`} moreStuff="howdy do" />
      <Header message="I like pizza" />
      <Header message="This is the about page"/>

      <HeaderWithChildren argOne="hello">
        <h3>is this children??</h3>
        <h3>is this children??</h3>
        <h3>is this children??</h3>
      </HeaderWithChildren>
      <HeaderWithChildren>
        <h1>React is amazing!</h1>
      </HeaderWithChildren>
      <HeaderWithChildren children="witty sentence">
        Actual children
      </HeaderWithChildren>
      {/* {children: 'witty sentence'} */}

      {/* <img className="something" src="something else" alt="yet more stuff" /> */}
      <div>
        <h2>Current counter: {counter}</h2>
        <button onClick={() => increment(2)}>Increment</button>
      </div>
    </div>
  );
};

export default App;
