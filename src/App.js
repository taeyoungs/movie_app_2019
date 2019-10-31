import React from 'react';

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav="pasta" />
      <Food fav="pizza" />
      <Food fav="kimchi" />
      <Food fav="noodle" />
    </div>
  );
}

export default App;
