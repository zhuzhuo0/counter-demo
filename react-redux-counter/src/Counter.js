import React, {
    Component
} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
    }

    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000)
    }

    render(){
        return (
            <div>
                <p>Clicked:{this.props.value} times</p>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button> 
                <button onClick={this.incrementIfOdd}>Increment if odd</button>
                <button onClick={this.incrementAsync}>Increment async</button>
            </div>
        )
    }

}

export default Counter;