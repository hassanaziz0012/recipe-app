import React from 'react';
import './Header.css';
import { prisma } from '@/app/db';

export default function Header({ brand, navItems }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">{brand}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {navItems.map((item, key) => 
                            <li key={key} className="nav-item"><a href={item.url} className="nav-link">{item.text}</a></li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
