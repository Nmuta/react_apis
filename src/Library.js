import React, {Component} from 'react';
import Books from './Books';

class Library extends Component{

    state  = {isLoading: true, books: null}

    async componentDidMount(){
        const url = "http://localhost:8082/api/books?delay=5000";
        const response = await fetch (url);
        const done = await response.json();

        this.setState({isLoading: false, books: done})
    }

    render(){
        return (
            <div>
                {this.state.isLoading ? <img src="./200.gif" /> : <Books books={this.state.books} />}
            </div>

        )
    }

}

export default Library;