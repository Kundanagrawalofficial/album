import { useState } from 'react';

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
  );
};

export default EditCategoryForm;
