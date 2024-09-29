import React from 'react';

import AddNewItemForm from './AddNewItemForm';

function App() {
  const [itemsList, setItemsList] = React.useState([]);
  const addItemsHandler = (item) => {
    setItemsList((prev) => [...prev, item]);
  };
  return (
    <div className='wrapper'>
      <div className='list-wrapper'>
        <ol className='shopping-list'>
          {itemsList.length ? (
            itemsList.map((item) => <li key={item.id}>{item.name}</li>)
          ) : (
            <li>There's nothing here yet.</li>
          )}
        </ol>
      </div>
      <AddNewItemForm onAddItems={addItemsHandler} />
    </div>
  );
}

export default App;
