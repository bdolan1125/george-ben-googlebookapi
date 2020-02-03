import React from 'react';
import ReactDOM from 'react-react-dom';

export default function Filter() {
  return(
    <section className='filter'>
      <p className='filter-bar'>Print Type:</p>
      <select> 
        <option value="One">One</option> 
        <option value="Two">Two</option> 
        <option value="Three">Three</option> 
        <option value="Four">Four</option> 
        <option value="five">Five</option> 
      </select>
      <p>Book Type:</p>
      <select> 
        <option value="One">One</option> 
        <option value="Two">Two</option> 
        <option value="Three">Three</option> 
        <option value="Four">Four</option> 
        <option value="five">Five</option> 
      </select>
    </section>
  )
};