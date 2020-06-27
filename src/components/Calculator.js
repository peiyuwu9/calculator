import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    this.operators = ["+", "-", "x", "/"];

    this.state = {
      firstNumber: "",
      operator: "",
      secondNumber: "",
      result: 0,
      operatorNotSelected: true,
      isCalculated: false,
    };
  }

  clickNumberHandler = (e) => {
    this.state.operatorNotSelected
      ? this.state.isCalculated
        ? this.setState(
            {
              firstNumber: e.target.value,
              operator: "",
              secondNumber: "",
              result: parseInt(e.target.value),
              operatorNotSelected: true,
              isCalculated: false,
            },
            () => {
              console.log(`First number: ${this.state.firstNumber}`);
            }
          )
        : this.setState(
            {
              firstNumber: this.state.firstNumber + e.target.value,
              result: parseInt(this.state.firstNumber + e.target.value),
            },
            () => {
              console.log(`First number: ${this.state.firstNumber}`);
            }
          )
      : this.setState(
          {
            secondNumber: this.state.secondNumber + e.target.value,
            result: parseInt(this.state.secondNumber + e.target.value),
          },
          () => {
            console.log(`Second number: ${this.state.secondNumber}`);
          }
        );
  };

  clickOperatorHandler = (e) => {
    this.setState(
      {
        operator: e.target.value,
        operatorNotSelected: false,
      },
      () => {
        console.log(`Operator: ${this.state.operator}`);
      }
    );
  };

  calculateResult = () => {
    switch (this.state.operator) {
      case "+":
        this.setState(
          {
            result:
              parseInt(this.state.firstNumber) +
              parseInt(this.state.secondNumber),
            isCalculated: true,
          },
          () => {
            console.log(this.state);
            this.setState({
              firstNumber: this.state.result.toString(),
              operator: "",
              secondNumber: "",
              operatorNotSelected: true,
            });
          }
        );
        break;

      case "-":
        this.setState(
          {
            result:
              parseInt(this.state.firstNumber) -
              parseInt(this.state.secondNumber),
            isCalculated: true,
          },
          () => {
            console.log(this.state);
            this.setState({
              firstNumber: this.state.result.toString(),
              operator: "",
              secondNumber: "",
              operatorNotSelected: true,
            });
          }
        );
        break;

      case "x":
        this.setState(
          {
            result:
              parseInt(this.state.firstNumber) *
              parseInt(this.state.secondNumber),
            isCalculated: true,
          },
          () => {
            console.log(this.state);
            this.setState({
              firstNumber: this.state.result.toString(),
              operator: "",
              secondNumber: "",
              operatorNotSelected: true,
            });
          }
        );
        break;

      case "/":
        this.setState(
          {
            result:
              parseInt(this.state.firstNumber) /
              parseInt(this.state.secondNumber),
            isCalculated: true,
          },
          () => {
            console.log(this.state);
            this.setState({
              firstNumber: this.state.result.toString(),
              operator: "",
              secondNumber: "",
              operatorNotSelected: true,
            });
          }
        );
        break;
    }
  };

  //   backUp = () => {
  //     this.state.operatorNotSelected
  //       ? this.setState({
  //           firstNumber: this.state.firstNumber,
  //         })
  //       : this.setState({
  //           secondNumber: this.state.secondNumber,
  //         });
  //   };

  clearUp = () => {
    this.setState({
      firstNumber: "",
      operator: "",
      secondNumber: "",
      result: 0,
      operatorNotSelected: true,
      isCalculated: false,
    });
  };

  render() {
    return (
      <div className={"grid-container"}>
        <input
          type="text"
          className={`grid-item-0 display`}
          value={this.state.result}
          readOnly
        />
        {this.numbers.map((num, index) => (
          <button
            key={index}
            value={num}
            className={`grid-item-${index + 1} numbers`}
            onClick={this.clickNumberHandler}
          >
            {num}
          </button>
        ))}
        {this.operators.map((opt, index) => (
          <button
            key={index + 10}
            value={opt}
            className={`grid-item-${index + 11} operators`}
            onClick={this.clickOperatorHandler}
          >
            {opt}
          </button>
        ))}
        <button
          value="="
          className={`grid-item-15 functions`}
          onClick={this.calculateResult}
        >
          =
        </button>
        {/* <button className={`grid-item-16 functions`} onClick={this.backUp}>
            Back
          </button> */}
        <button className={`grid-item-16 functions`} onClick={this.clearUp}>
          C
        </button>
      </div>
    );
  }
}

export default Calculator;
