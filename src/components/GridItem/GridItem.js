import React from 'react';

export default function GridItem(props) {
    const { active, number, handleClick } = props;
    
    return (
        <li className={`app-grid__item ${ active ? "highlighted" : "" }`} onClick={ handleClick }>
            {number}
        </li>
    )
}