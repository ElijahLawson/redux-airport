import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import {applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const initialAirlines = [{id: 1, name: 'Delta'},{id: 2, name: 'Virgin'}];

/** TODO: Add REDUCERS */
const airlines = (state=initialAirlines, action) => {
    
    if (action.type === 'ADD_AIRLINE' && action.payload !== '') {
        const newAirlineName = action.payload;
        const newID = state.lenght + 1;

        const newAirline = {
            id: newID,
            name: newAirlineName,
        }
        return [...state, newAirline]
    }
    return state
}

/** TODO: Create store */
const store = createStore(
    combineReducers({
        airlines
    }),
    applyMiddleware(logger)
);



// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
        
    </React.StrictMode>
);