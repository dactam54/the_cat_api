import React from 'react';
import Header from './Header';
import Cats from './Cats';

const Home = ({greeting}) => {
  return (
    <div className="mt-4">
      <Header text={greeting}/>
      <Cats />
    </div>
    
  );
};

export default Home;