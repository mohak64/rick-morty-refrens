

import React, { useState } from "react";
import { Modal, Button } from "antd";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";
import Type from "./category/Type"
import { FilterOutlined } from "@ant-design/icons";

const Filter = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
  updateType,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const clearFilters = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updateType("");
    updatePageNumber(1);
    handleCancel();
    window.location.reload();
  };

  return (
    <div className="col-lg-3 col-12 mb-5 d-flex justify-content-center">
      <Button
        type="primary"
        onClick={showModal}
        icon={<FilterOutlined />}
        style={{ width: "50%" }}
      >
        Open Filters
      </Button>
      <Modal
        title="Filters"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="clear" type="danger" onClick={clearFilters}>
            Clear Filters
          </Button>,
        ]}
      >
        <div style={{ marginBottom: "20px" }}>
        </div>
        <Status updatePageNumber={updatePageNumber} updateStatus={updateStatus} />
        <div style={{ marginBottom: "20px" }}>
        </div>
        <Species updatePageNumber={updatePageNumber} updateSpecies={updateSpecies} />
        <div style={{ marginBottom: "20px" }}>
        </div>
        <Gender updatePageNumber={updatePageNumber} updateGender={updateGender} />
        <div style={{ marginBottom: "20px" }}>
        </div>
        {/* <Type updatePageNumber={updatePageNumber} updateType={updateType} /> */}
      </Modal>
    </div>
  );
};

export default Filter;
