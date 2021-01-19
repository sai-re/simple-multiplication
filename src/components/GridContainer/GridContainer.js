import React from 'react';

export default class GridContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            numbers: [],
            highlighted: false,
            currentNum: ''
        };
    }

    render() {
        return (
            <div className="app-container">
                <h1 className="app__title">Understanding Multiplication</h1>

                <p className="app__description">This app displays 144 boxes on the screen. Click a box to view all the multiples of that number.</p>

                <ul className="app-grid__container">

                </ul>
            </div>
        )
    }
}