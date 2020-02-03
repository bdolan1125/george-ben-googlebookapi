import React from 'react';
import ReactDom from 'react-dom';
import Header from './header';
import Search from './search';
import Filter from './filter';
import Results from './results';

export default function App() {
  return(
    <div>
      <Header />
      <Search />
      <Filter />
      <Results />
    </div>
  )
};


