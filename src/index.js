import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = 'Todo App';
const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

const cardStyle = {
  backgroundColor: 'black',
  width:'300px',
  height:'300px',
  padding: '10px',
  borderRadius:'10px',
  border:'2px solid red',
  color:'yellow',
  textAlign:'center'
}

const buttonStyle = {
  backgroundColor:'yellow',
  color:'red',
  fontSize:'18px',
  padding:'5px',
  borderRadius:'5px',
  border:'2px solid red'
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={cardStyle}>
      <h1>{heading}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio nisi maxime rerum quibusdam, corrupti enim fuga voluptatem soluta mollitia.</p>
      <p>{currentDate + '/' + currentMonth + '/' + currentYear}</p>
      <button style={buttonStyle}>Click Here</button>
  </div>

);
