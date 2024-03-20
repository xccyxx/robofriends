import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
            this.setState({ robots: users })
        });
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return (
            <div className='tc'>
            <h1 className='f1'>ROBOFRIENDS</h1>
            <ErrorBoundary>
                {!robots.length ? (
                    <h1 className='tc f1'>Loading...</h1>
                ) : (
                    <>
                        <SearchBar searchChange={this.onSearchChange}/>
                        <Scroll>
                            <CardList robots={filteredRobots} />
                        </Scroll>
                    </>
                )}
            </ErrorBoundary>
            </div>
        )
    }
}

export default App;