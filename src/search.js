import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  state = {
    repos:[]
  };
  constructor(props) {
    super(props);
    

  this.handleSubmit = this.handleSubmit.bind(this);
  }
     handleSubmit = e => {
    let searchVal = this.refs.title.value;
    let fetchTitle = () => {
      fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchVal)
        .then(res => res.json())
        .then(repos => this.setState({repos}))
    }
    console.log(this.state.repos);
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