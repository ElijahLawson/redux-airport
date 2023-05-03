import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
function App() {

  const [airlineInput, setAirlineInput] = useState('');

  const airlines = useSelector((store) => store.airlines);
  console.log(airlines);

  const dispatch = useDispatch();

  const addAirline = (event) => {
    event.preventDefault();

    dispatch({
        type: 'ADD_AIRLINE',
        payload: airlineInput
    })

    setAirlineInput('');
}

  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={addAirline}>
        <input 
          type="text"
          placeholder='Airline Name' 
          value={airlineInput} 
          onChange={(event) => {setAirlineInput(event.target.value)}}/>
        <button>Add Airline</button>
      </form>

      <table>
        <tbody>
          {airlines.map((airline) => {
            console.log(airline)
            return(
              <tr>
                <td key={airline.key}>{airline.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
