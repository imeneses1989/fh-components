import React, { Component } from 'react';
import Card from './components/Card/Card';

import Recipes from './components/Card/CardInfo';
import image from './components/styles/images/paella.jpg';

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
          image={image}
        />
      </div>
    );
  }
}

export default App;