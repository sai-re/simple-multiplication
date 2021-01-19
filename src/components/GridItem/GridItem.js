import React from 'react';
import './GridItem.scss';

export default function GridItem(props) {
    const { className, number, handleClick } = props;
    
    return (
        <li className={`app-grid__item ${ className ? "highlighted" : "" }`} onClick={ handleClick }>
            {number}
        </li>
    )
}