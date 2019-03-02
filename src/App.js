import React, { Component } from 'react';
import Card from './components/Card/Card';

import Recipes from './components/Card/CardInfo';

class App extends Component {

  state = {
    card: {},
  }

  render() {

    const card = Recipes.find(r=>r.id === 1);
    
    return (
      <div className="container">
        <Card 
          title={card.title}
          date={card.date}
          excerpt={card.excerpt}
          text={card.method}
        />
      </div>
    );
  }
}

export default App;