import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

  this.handleSubmit = this.handleSubmit.bind(this);
  }
     handleSubmit = e => {
    let searchVal = this.refs.title.value;
    console.log(searchVal);
    }
    render(){
  return(
    <section className='search-bar'>
      <p>Search:</p>
      <input ref='title' type='text' className='search-box'></input>
      <button onClick={this.handleSubmit} type='submit' className='search-but'>Search</button>
    </section>
  )
}}


export default Search;