// import React from "react";
// import FilterBTN from "../FilterBTN";

// const Species = ({ updateSpecies, updatePageNumber }) => {
//   let species = [
//     "Human",
//     "Alien",
//     "Humanoid",
//     "Poopybutthole",
//     "Mythological",
//     "Unknown",
//     "Animal",
//     "Disease",
//     "Robot",
//     "Cronenberg",
//     "Planet",
//   ];
//   return (
//     <div className="accordion-item ">
//       <h2 className="accordion-header" id="headingTwo">
//         <button
//           className="accordion-button collapsed"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#collapseTwo"
//           aria-expanded="false"
//           aria-controls="collapseTwo"
//         >
//           Species
//         </button>
//       </h2>
//       <div
//         id="collapseTwo"
//         className="accordion-collapse collapse"
//         aria-labelledby="headingTwo"
//         data-bs-parent="#accordionExample"
//       >
//         <div className="accordion-body d-flex flex-wrap gap-3">
//           {species.map((item, index) => {
//             return (
//               <FilterBTN
//                 name="species"
//                 index={index}
//                 key={index}
//                 updatePageNumber={updatePageNumber}
//                 task={updateSpecies}
//                 input={item}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Species;
import React from "react";
import { Collapse } from "antd";
import FilterBTN from "../FilterBTN";

const { Panel } = Collapse;

const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <Collapse defaultActiveKey={["1"]} accordion>
      <Panel header="Species" key="1">
        <div className="d-flex flex-wrap gap-3">
          {species.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="species"
              task={updateSpecies}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>
      </Panel>
    </Collapse>
  );
};

export default Species;
