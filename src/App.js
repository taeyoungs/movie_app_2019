import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: 'Pasta',
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1103&q=80',
    rating: 4.3,
  },
  {
    id: 2,
    name: 'Pizza',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Kimchi',
    image:
      'https://images.unsplash.com/photo-1487769723072-0e6602799af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    rating: 3.6,
  },
  {
    id: 4,
    name: 'Noodle',
    image:
      'https://images.unsplash.com/photo-1537081956137-3931105e2d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Curry',
    image:
      'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    rating: 2.6,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name} width="300" />
      <h3>rating: {rating} / 5.0</h3>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {foodILike.map(menu => {
        return (
          <Food
            key={menu.id}
            name={menu.name}
            picture={menu.image}
            rating={menu.rating}
          />
        );
      })}
    </div>
  );
}

export default App;
