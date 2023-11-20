// import React from "react";
import { Collapse, Button } from "antd";
import FilterBTN from "../FilterBTN";

const { Panel } = Collapse;

const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];

  return (
    <Collapse defaultActiveKey={["1"]} accordion>
      <Panel header="Status" key="1">
        <div className="d-flex flex-wrap gap-3">
          {status.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="status"
              task={updateStatus}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>
      </Panel>
    </Collapse>
  );
};

export default Status;
