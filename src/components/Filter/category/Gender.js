
import React from "react";
import { Collapse } from "antd";
import FilterBTN from "../FilterBTN";

const { Panel } = Collapse;

const Gender = ({ updateGender, updatePageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];

  return (
    <Collapse defaultActiveKey={["1"]} accordion>
      <Panel header="Gender" key="1">
        <div className="d-flex flex-wrap gap-3">
          {genders.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="gender"
              task={updateGender}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>
      </Panel>
    </Collapse>
  );
};

export default Gender;
