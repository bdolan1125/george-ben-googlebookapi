import React from 'react';
import ReactDOM from 'react-dom';

export default function Search() {
  handleSubmit = e => {
    let searchVal = ${'search-box'}.val();
    console.log(searchVal)

  }
  return(
    <section className='search-bar'>
      <p>Search:</p>
      <form type='text' className='search-box'></form>
      <button onClick={this.handleSubmit} type='submit' className='search-but'>Search</button>
    </section>
  )
}