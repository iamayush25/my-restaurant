import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Home from '../Home/Home';
import Logo from '../Images/logo.png';
import ContactPage from '../ContactUs/ContactUs';
import Login from "../Login/Login";
import AboutMe from "../About/About";
import DisplayItems from "../DisplayItems/DisplayItems";

const Navbar = () => {
    const [data, setData] = useState([]);
    const [price] = useState(120);
    const [selectedCategory, setSelectedCategory] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
            const result = await response.json();
            setData(result.meals || []);
        };

        fetchData();
    }, []);

    const handleChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        if (category) {
            navigate(`/items/${category}`);
        } else {
            navigate("/");
        }
    };

    const uniqueCategories = Array.from(
        new Set(data.map((meal) => meal.strCategory))
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className='Logo' src={Logo} alt="Logo" />
                </Link>
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
                    <ul className="navbar-nav ms-auto d-flex align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <div className="search-section">
                                <div className="input-group">
                                    <select
                                        className="form-select"
                                        onChange={handleChange}
                                        value={selectedCategory}
                                    >
                                        <option value="">Menu</option>
                                        {uniqueCategories.map((category, index) => (
                                            <option key={index} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                    <i className="fa-solid fa-cart-shopping fs-5 m-2"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
