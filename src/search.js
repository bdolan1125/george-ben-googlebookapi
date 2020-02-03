import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Search extends Component() {
  constructor(props){
    super(props);
    let handleSubmit = e => {
    let searchVal = this.refs.title.value;
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(searchVal);
      
    }
  
  
  return(
    <section className='search-bar'>
      <p>Search:</p>
      <form ref='title' type='text' className='search-box'></form>
      <button onClick={handleSubmit} type='submit' className='search-but'>Search</button>
    </section>
  )
}}