import React from "react";

const InputGroup = ({ name, changeID, total }) => {
  const generateOptions = () => {
    return [...Array(total).keys()].map((x, index) => (
      <option key={index} value={x + 1}>
        {name} - {x + 1}
      </option>
    ));
  };

  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="">Choose...</option>
        {generateOptions()}
      </select>
    </div>
  );
};

export default InputGroup;
