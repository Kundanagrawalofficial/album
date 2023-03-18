import React, { useState } from 'react';
// import { Modal } from 'antd';
import CategoryForm from './../component/CategoryForm';

const EditCategoryModal = ({ category, visible, handleOk, handleCancel }) => {
  const [updatedName, setUpdatedName] = useState('');

  const handleUpdate = () => {
    // Handle category update logic here
    handleOk(updatedName);
  };

  return (
   
      <CategoryForm
        value={updatedName}
        setValue={setUpdatedName}
        handleSubmit={handleUpdate}
      />
  );
};

export default EditCategoryModal;
