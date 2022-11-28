import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ColorMenu() {
    return (
        <div className="color-menu">
            <Link to="/colors/blue"><h2>Blue</h2></Link>
            <Link to="/colors/pink"><h2>Pink</h2></Link>
            <Link to="/colors/purple"><h2>Purple</h2></Link>
            <Link to="/colors/green"><h2>Green</h2></Link>
            <Link to="/colors/yellow"><h2>Yellow</h2></Link>
            <Link to="/colors/orange"><h2>Orange</h2></Link>
            <Link to="/colors/red"><h2>Red</h2></Link>
            <Link to="/colors/gray"><h2>Gray</h2></Link>
            <Link to="/colors/black"><h2>Black</h2></Link>
            <Link to="/colors/white"><h2>White</h2></Link>
        </div>
    )
}

export default ColorMenu;