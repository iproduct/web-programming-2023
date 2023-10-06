import './MainPage.css';
import { useEffect, useState } from "react";
import PostInput from './PostInput';
import API_CLIENT from '../services/api-client';
import PostsList from './PostsList';
import { NavLink, Outlet } from 'react-router-dom';

const MainPage = () => (
    <div className="MainPage">
        <header className="App-header">
            <nav>
                <NavLink to="/" className={({ isActive }) =>
                    "navlink " + (isActive ? "active" : "")
                }>
                    Home
                </NavLink>
                <NavLink to="/posts" className={({ isActive, isPending }) =>
                    "navlink " + (isActive ? "active" : "")
                }>
                    Posts
                </NavLink>
                <NavLink to="/about" className={({ isActive, isPending }) =>
                    "navlink " + (isActive ? "active" : "")
                }>
                    About Us
                </NavLink>
            </nav>
            <h2>React Blogs</h2>
            <Outlet />
        </header>
    </div>
);

export default MainPage;