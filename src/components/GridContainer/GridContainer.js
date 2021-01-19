import React from 'react';
import GridItem from '../GridItem/GridItem';
import './GridContainer.scss';

export default class GridContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            numbers: [],
            highlighted: false,
            currentNum: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
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

    /**
    * @function handleClick finds multiple of clicked number and toggles active property
	*/
    handleClick = (e) => {
        const copy = [...this.state.numbers];
        const currentNum = +e.target.textContent;

        copy.forEach((item) => item.num % currentNum === 0 ? (item.active = true) : (item.active = false));

        this.setState({ numbers: copy, currentNum: currentNum });
    };

    /**
    * @function handleReset loops over all numbers and toggles active to false
	*/
    handleReset = () => {
        const copy = [...this.state.numbers];
    
        copy.forEach((item) => (item.active = false));
    
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

                <p className="app__selected-num">You have selected {this.state.currentNum}</p>

                <button className="app__reset" onClick={ this.handleReset }>Reset</button>

                <ul className="app-grid__container">
                    {this.state.numbers.map((item) => (
                        <GridItem 
                            key={item.num}
                            handleClick={this.handleClick}
                            className={item.active}
                            number={item.num}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}