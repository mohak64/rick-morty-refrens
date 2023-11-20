
import React from "react";
import { Collapse } from "antd";
import FilterBTN from "../FilterBTN";

const { Panel } = Collapse;

const Type = ({ updateType, updatePageNumber }) => {
    let types = ["Planet", "Space station",];

    return (
        <Collapse defaultActiveKey={["1"]} accordion>
            <Panel header="Type" key="1">
                <div className="d-flex flex-wrap gap-3">
                    {types.map((item, index) => (
                        <FilterBTN
                            key={index}
                            index={index}
                            name="type"
                            task={updateType}
                            updatePageNumber={updatePageNumber}
                            input={item}
                        />
                    ))}
                </div>
            </Panel>
        </Collapse>
    );
};

export default Type;
