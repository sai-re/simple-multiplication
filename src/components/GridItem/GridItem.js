import React from 'react';

export default function GridItem(props) {
    const { active, number } = props;
    
    return (
        <li className={`app-grid__item ${active ? "highlighted" : ""}`} >
            {number}
        </li>
    )
}