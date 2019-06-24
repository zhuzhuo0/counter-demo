import React from 'react';
import ReactDOM from 'react-dom';
import {
    createStore
} from "redux";
import Counter from './Counter'
import Reducer from './reducer'

const store = createStore(Reducer);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render( < Counter value = {
            store.getState()
        }
        onIncrement = {
            () => store.dispatch({
                type: 'INCRE'
            })
        }
        onDecrement = {
            () => store.dispatch({
                type: 'DECRE'
            })
        }
        />,rootEl)

        render()

        store.subscribe(render)