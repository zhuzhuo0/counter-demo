import React, {
    Component
} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    onIncrement = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    onDecrement = () => {
        this.setState({
            value: this.state.value - 1
        })
    }

    incrementIfOdd = () => {
        if (this.state.value % 2 !== 0) {
            this.onIncrement();
        }
    }

    incrementAsync = () => {
        setTimeout(this.onIncrement, 1000)
    }

    render(){
        return (
            <div>
                <p>Clicked:{this.state.value} times</p>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button> 
                <button onClick={this.incrementIfOdd}>Increment if odd</button>
                <button onClick={this.incrementAsync}>Increment async</button>
            </div>
        )
    }

}

export default Counter;