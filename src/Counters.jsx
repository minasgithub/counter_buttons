import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
  render() {
    const { counters, onIncrement, onDecrement, onDelete, onReset } = this.props;

    return (
      <div className="main">
        <h1>Counter buttons!</h1>
        {counters.map((counter) => (
          <Counter
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            key={counter.id}
            value={counter.value}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
        <button className="resetBtn" onClick={onReset}>
          reset
        </button>
      </div>
    );
  }
}
