import React from "react";
import "./buttons.css";

export default function Buttons({ buttonAction, setIsDisabled }) {
  return (
    <>
      <div
        onClick={() => {
          buttonAction();
        }}
        className={`btn add no-select`}
      >
        Add
      </div>
      <div className="switch-button">
        <input
          className="switch-button-checkbox"
          type="checkbox"
          onClick={() => {
            setIsDisabled((prev) => !prev);
          }}
        ></input>
        <label className="switch-button-label">
          <span className="switch-button-label-span">Enable</span>
        </label>
      </div>
    </>
  );
}
