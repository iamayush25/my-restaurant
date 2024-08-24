import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DisplayItems.css';

function DisplayItems() {
    const { category } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
            const result = await response.json();
            const filteredItems = category 
                ? result.meals.filter(item => item.strCategory === category) 
                : result.meals;
            setItems(filteredItems);
        };

        fetchItems();
    }, [category]);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Items in {category || 'All Categories'}</h1>
            <div className="items-grid">
                {items.map((item) => (
                    <div key={item.idMeal} className="item-card">
                        <img className="item-image" src={item.strMealThumb} alt={item.strMeal} />
                        <div className="item-content">
                            <h3 className="item-title">{item.strMeal}</h3>
                            <p className="item-price">Price: </p>
                            <a href="#" className="btn btn-primary">Add Item</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayItems;
