import React, { Component } from "react";
import "./styles.css";

export default class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // then Ajax call to get new data from the server
      console.log("I've changed!");
    }
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <span className="num">{this.formatCount()}</span>
            </td>
            <td>
              <button
                className="btn"
                onClick={() => this.props.onIncrement(this.props.counter)}
              >
                +
              </button>
            </td>
            <td>
              <button
                className="btn"
                onClick={() => this.props.onDecrement(this.props.counter)}
              >
                -
              </button>
            </td>
            <td>
              <button
                className="btn"
                onClick={() => this.props.onDelete(this.props.counter.id)}
              >
                delete
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
