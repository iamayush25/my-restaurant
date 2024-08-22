import React, { useState, t, useEffect } from 'react'
import Home from '../Home/Home';

const Navbar = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("Search");
    const [selectedCategory, setSelectedCategory] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://www.themealdb.com/api/json/v1/1/search.php?s"
            );
            const result = await response.json();
            setData(result.meals || []);
        };

        fetchData();
    }, []);

    const handleChange = (event) => {
        setValue(event.target.value);
        setSelectedCategory(event.target.value);
    };

    const uniqueCategories = Array.from(
        new Set(data.map((meal) => meal.strCategory))
    );


    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            S3 Restaurant
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#login">
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="search-section">
                            <div className="input-group">
                                <select className="form-select" onChange={handleChange}>
                                    <option value="">Menu</option>
                                    {uniqueCategories.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={handleChange}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <Home />
        </>
    )

}

export default Navbar