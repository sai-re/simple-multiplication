import React from 'react';
import GridItem from '../GridItem/GridItem';

export default class GridContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            numbers: [],
            highlighted: false,
            currentNum: ''
        };
    }

    /**
    * @function printNumbers creates array of 144 objects made up of number and active state
	*/
    printNumbers = () => {
        const copy = [];
        
        for (let i = 1; i <= 144; i++) {
            copy.push({ num: i, active: false });
        }
    
        this.setState({ numbers: copy });
    };

    componentDidMount() {
        this.printNumbers();
    }

    render() {
        return (
            <div className="app-container">
                <h1 className="app__title">Understanding Multiplication</h1>

                <p className="app__description">This app displays 144 boxes on the screen. Click a box to view all the multiples of that number.</p>

                <ul className="app-grid__container">
                    {this.state.numbers.map((item) => (
                        <GridItem 
                            key={item.num}
                            onClick={this.handleClick}
                            className={item.active}
                            number={item.num}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}