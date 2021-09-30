import {useState, useEffect} from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {}, [])

  useEffect(() => {
    console.log('updating the title');
    document.title = `The count is ${counter}`;
  }, [counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`the counter is at ${counter}`);
      // alert(`the counter is at ${counter}`);
    }, 3000);

    const cleanup = () => {
      console.log('cleaning up after ourselves');
      clearInterval(interval);
    };

    return cleanup;
  }, []);

  return (
    <div>
      <h2>Current counter is {counter}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Click Me!
      </button>

      <div>
        <label>Search term:</label>
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Counter;
