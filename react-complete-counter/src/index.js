import React from 'react';
import ReactDOM from 'react-dom';
import {
    createStore
} from "redux";
import Counter from './Counter'
import Reducer from './reducer'
import {
    Provider,
    connect
} from 'react-redux'

const store = createStore(Reducer);

const rootEl = document.getElementById('root');

const mapStateToProps = state => {
    return {
        value:state
    }
}

const mapDispatchToProps = state => {
    return {
        onIncrement:()=>{
            store.dispatch({
                type: 'INCRE'
            })
        },
        onDecrement:()=>{
            store.dispatch({
                type: 'DECRE'
            })
        }
    }
}

const App = connect(mapStateToProps,mapDispatchToProps)(Counter);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,rootEl);