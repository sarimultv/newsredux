import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {reducer} from './reducers/Reducers'
// import {FetchNews} from './components/Action'
import createSagaMiddleware from 'redux-saga'
import {watchAddNews} from './sagas/Saga'

const SagaMiddleware= createSagaMiddleware();
const store= createStore(reducer,applyMiddleware(logger,thunk,SagaMiddleware));

SagaMiddleware.run(watchAddNews);

// store.dispatch(FetchNews);

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
