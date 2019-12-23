import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.scss'

function Navbar() {
  
    return (
        <nav>
            <ul className="list-nav">
                <Link to="/"><lo className="item-list">INICIO</lo></Link>
                <Link to="/search"><lo className="item-list">BUSCAR CMEs</lo></Link>
            </ul>
        </nav>
    )}

export default Navbar;