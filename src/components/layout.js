import React, { Component } from 'react';
import Header from './headernavbar/header';
import Navbar from './headernavbar/navba';

export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
          <Header/>
          <Navbar/>
      </div>
    );
  }
}
