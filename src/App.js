import React from 'react';

import './App.scss';

import Card from './componets/Card.jsx';
import DB from './assets/db.json';

function App() {
  const cards = DB.products.map((card) => <Card key={card.id} card={card}/>);
  return (
    <div className="App">
      <h1 className="title">Ты сегодня покормил кота?</h1>
      <div className="cards">
        {cards}
      </div>
    </div>
  );
}

export default App;
