import React from 'react';
import { ModalStack } from 'src/components'
import { Restaurant } from 'src/pages';
import { store, modalStorage, UseMigration } from 'src/store'
import './App.scss';

UseMigration(store)

function App() {
  return (
    <div className="App">
      <Restaurant name="harry" store={store} modalStorage={modalStorage} />
      <ModalStack store={store} modalStorage={modalStorage} />
    </div>
  );
}

export default App;
