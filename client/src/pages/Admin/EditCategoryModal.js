<<<<<<< HEAD
import { useState } from 'react';
=======
import React, { useState } from 'react';
// import { Modal } from 'antd';
import CategoryForm from './../components/Form/CategoryForm';
>>>>>>> 1e44ada6cf462e8fc985fa23c6a90023f858453a

const EditCategoryForm = ({ category, onSubmit }) => {
  const [name, setName] = useState(category ? category.name : '');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit}>
      <label htmlFor="category-name">Category Name:</label>
      <input
        id="category-name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <button type="submit">Save Changes</button>
    </form>
=======
   
      <CategoryForm
        value={updatedName}
        setValue={setUpdatedName}
        handleSubmit={handleUpdate}
      />
>>>>>>> 1e44ada6cf462e8fc985fa23c6a90023f858453a
  );
};

export default EditCategoryForm;
