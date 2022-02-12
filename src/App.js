import React, { Component } from 'react';
import Customer from './components/Customer'

import './App.css';

const customers=[
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name':'강재현',
    'birthday':'000208',
    'gender':'남자',
    'job':'대학생',
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name':'강재현2',
    'birthday':'990208',
    'gender':'남자',
    'job':'강재현',
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name':'강재현3',
    'birthday':'000108',
    'gender':'남자',
    'job':'대학생',
  }
]

class App extends Component{
  render(){
    return (
      <div>
        {customers.map(c=>{
            return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);})}
      </div>
    );
  }
}

export default App;