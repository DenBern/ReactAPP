import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello world';

// Участок кода ниже, является реакт элементом
const elem = (
  <div>
    <h2 className='text'>{text}</h2>
    <input type="text" />
    <label htmlFor=''></label>
    <button tabIndex="0">Click</button>
    
  </div>
);


// Этот синтаксис не используется.
// const elem = React.createElement('h1', {className: 'greeting'}, 'Hello world!');
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello world!'
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
  document.getElementById('root')
);

