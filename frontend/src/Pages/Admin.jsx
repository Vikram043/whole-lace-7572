import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadData = () => {
    setIsLoading(true);
    dataProvider.get().then(() => {
      setIsLoading(false);
    });
  };

  return (
    <div>
      <Admin
        dataProvider={dataProvider}
        loading={isLoading}
        onLoadData={handleLoadData}
      >
        <Resource name="users" list={ListGuesser} />
        <Resource name="appointments" list={ListGuesser} />
        <Resource name="pets" list={ListGuesser} />
      </Admin>
    </div>
  );
};

export default App