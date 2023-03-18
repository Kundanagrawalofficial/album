import React, { useState } from 'react';
import { Modal } from 'antd';
import CategoryForm from './CategoryForm';

const EditCategoryModal = ({ category, visible, handleOk, handleCancel }) => {
  const [updatedName, setUpdatedName] = useState('');

  const handleUpdate = () => {
    // Handle category update logic here
    handleOk(updatedName);
  };

  return (
    <Modal
      title={`Update Category - ${category.name}`}
      visible={visible}
      onCancel={handleCancel}
      footer={null}
    >
      <CategoryForm
        value={updatedName}
        setValue={setUpdatedName}
        handleSubmit={handleUpdate}
      />
    </Modal>
  );
};

export default EditCategoryModal;
