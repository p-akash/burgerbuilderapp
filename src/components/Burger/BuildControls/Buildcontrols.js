import React from "react";
import classes from "./Buildcontrols.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad ", type: "salad" },
  { label: "Bacon ", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat  ", type: "meat" }
];
const buildcontrols = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        <strong>Total Price = {props.totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.addIngredients(ctrl.type)}
          remove={() => props.removeIngredients(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
    </div>
  );
};

export default buildcontrols;
