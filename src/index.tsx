import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from './store/reducers';
import {Provider} from "react-redux";
import {listenerSaga} from "./store/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(listenerSaga);

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
