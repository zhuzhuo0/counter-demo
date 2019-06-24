import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';

const ButtonAct = (props)=><button onClick={props.onClick}>{props.text}</button>

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
        const {value,onIncrement,onDecrement} = this.props;
        return (
            <div>
                <p>Clicked:{value} times</p>
                <ButtonAct text={' + '} onClick={onIncrement} />
                <ButtonAct text={' - '} onClick={onDecrement} />
                <ButtonAct text={'Increment if odd'} onClick={this.incrementIfOdd} />
                <ButtonAct text={'Increment async'} onClick={this.incrementAsync} />
            </div>
        )
    }

}

Counter.propTypes = {
    value:PropTypes.number.isRequired,
    onIncrement:PropTypes.func.isRequired,
    onDecrement:PropTypes.func.isRequired
}

export default Counter;