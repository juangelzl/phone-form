import React, { useState } from "react";
import classes from "./PhoneForm.module.css";

const Row = (props) => {
  const cols = [];
  const numberInputHandler = (e) => {
    const numero = { id: e.target.name, value: e.target.value };
    props.onNumberInputHandler(numero);
    // e.target.value
  };
  for (let j = 0; j < 10; j++) {
    cols.push(
      <div className={classes.col} key={j}>
        <label>{props.number}</label>
        <input
          type="radio"
          name={j}
          value={props.number}
          onChange={numberInputHandler}
        ></input>
      </div>
    );
  }

  return <div className={classes.row}>{cols}</div>;
};

const Numbers = (props) => {
  return (
    <div className={`${classes.row} ${classes.numbers}`}>
      {props.numbers.map((number) => (
        <div key={number.id} className={`${classes.col} ${classes.number}`}>
          {number.value}
        </div>
      ))}
    </div>
  );
};

const PhoneForm = (props) => {
  const [numbers, setNumbers] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
    { id: 6, value: 0 },
    { id: 7, value: 0 },
    { id: 8, value: 0 },
    { id: 9, value: 0 },
  ]);

  const numberChangeHandler = (inputNumber) => {
    const newNumbers = numbers.slice();
    const searchId = +inputNumber.id;
    const index = newNumbers.findIndex((el) => el.id === searchId);
    console.log(index);
    newNumbers[index].value = inputNumber.value;
    console.log(newNumbers);
    setNumbers(newNumbers);
  };

  const rows = [];
  for (let j = 0; j < 10; j++) {
    rows.push(
      <Row key={j} number={j} onNumberInputHandler={numberChangeHandler}></Row>
    );
  }
  return (
    <div className={classes.container}>
      <p>Ingresa tu teléfono</p>
      <form className={classes.radios} onChange={props.onChange}>{rows}</form>
      <Numbers numbers={numbers}></Numbers>
    </div>
  );
};

export default PhoneForm;
