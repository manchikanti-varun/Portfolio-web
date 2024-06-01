import React, { useState } from 'react';
import './Templates.css';

const Templates = ({ cartItems, addToCart, removeFromCart }) => {
  const templates = [
    { id: 1, name: 'Tech Innovator', price: 100, rating: 4.5 },
    { id: 2, name: 'Creative Artist', price: 150, rating: 3.8 },
    { id: 3, name: 'Financial Advisor', price: 200, rating: 4.9 },
    { id: 4, name: 'Travel Blogger', price: 180, rating: 4.2 },
    { id: 5, name: 'Freelance Writer', price: 120, rating: 4.0 },
    { id: 6, name: 'Startup Founder', price: 180, rating: 3.6 },
    { id: 7, name: 'Marketing Guru', price: 250, rating: 4.8 },
    { id: 8, name: 'Architect Portfolio', price: 300, rating: 4.3 },
    { id: 9, name: 'Graphic Designer', price: 250, rating: 3.9 },
    { id: 10, name: 'Product Manager', price: 220, rating: 4.7 },
    { id: 11, name: 'Fitness Trainer', price: 350, rating: 4.6 },
    { id: 12, name: 'Photographer Showcase', price: 450, rating: 4.2 },
    { id: 13, name: 'UI/UX Designer', price: 400, rating: 4.1 },
    { id: 14, name: 'Event Planner', price: 130, rating: 3.7 },
    { id: 15, name: 'Software Developer', price: 180, rating: 4.5 },
    { id: 16, name: 'Legal Consultant', price: 200, rating: 4.8 },
    { id: 17, name: 'E-commerce Expert', price: 300, rating: 3.9 },
    { id: 18, name: 'Fashion Designer', price: 250, rating: 4.3 },
    { id: 19, name: 'Digital Marketer', price: 280, rating: 4.7 },
    { id: 20, name: 'Chef Portfolio', price: 380, rating: 4.2 },
    { id: 21, name: 'Music Producer', price: 400, rating: 4.9 },
    { id: 22, name: 'Interior Designer', price: 450, rating: 4.6 },
    { id: 23, name: 'Real Estate Agent', price: 480, rating: 4.3 },
    { id: 24, name: 'Corporate Executive', price: 500, rating: 4.8 },
    { id: 25, name: 'Healthcare Professional', price: 200, rating: 4.4 }
  ];

  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedTemplates = filteredTemplates.sort((a, b) => {
    switch (sort) {
      case 'priceLowToHigh':
        return a.price - b.price;
      case 'priceHighToLow':
        return b.price - a.price;
      case 'ratingLowToHigh':
        return a.rating - b.rating;
      case 'ratingHighToLow':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const clearFilter = () => {
    setFilter('');
    setSort('');
  };

  return (
    <div className="container">
      <h2>Templates</h2>
      <div className="filter-sort-section">
        <div className="form-group d-flex align-items-center">
          <input
            type="text"
            placeholder="Filter by name"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="form-control me-3"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="form-control me-3"
          >
            <option value="">Sort by</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="ratingLowToHigh">Rating: Low to High</option>
            <option value="ratingHighToLow">Rating: High to Low</option>
          </select>
          <button className="btn btn-secondary btn-sm" onClick={clearFilter}>Clear Filter</button>
        </div>
      </div>
      <div className="row">
        {sortedTemplates.map(template => (
          <div key={template.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{template.name}</h5>
                <p className="card-text">Price: ₹{template.price}</p>
                <p className="card-text">Rating: {template.rating}</p>
                {cartItems.find(item => item.id === template.id) ? (
                  <button className="btn btn-danger" onClick={() => removeFromCart(template.id)}>Remove from Cart</button>
                ) : (
                  <button className="btn btn-primary" onClick={() => addToCart(template)}>Add to Cart</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
