import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = 'Todo App';
const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <h1>{heading}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio nisi maxime rerum quibusdam, corrupti enim fuga voluptatem soluta mollitia.</p>
      <p>{currentDate + '/' + currentMonth + '/' + currentYear}</p>
      <button>Click Here</button>
  </div>

);
