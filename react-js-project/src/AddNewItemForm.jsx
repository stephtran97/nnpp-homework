import React from 'react';

function AddNewItemForm({ onAddItems }) {
  const [itemName, setItemName] = React.useState('');
  const addItemHandler = (e) => {
    e.preventDefault();
    if (!itemName) return;
    onAddItems({ name: itemName, id: crypto.randomUUID() });
    setItemName('');
  };
  return (
    <div className='new-list-item-form'>
      <form>
        <label htmlFor='new-list-form-input'>New item:</label>

        <div className='row'>
          <input
            id='new-list-form-input'
            type='text'
            value={itemName}
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
          <button onClick={addItemHandler}>Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewItemForm;
