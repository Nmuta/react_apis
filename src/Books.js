import React,{Component} from 'react';
import BookItems from './BookItems';


export default class Books extends Component {


    state={booksLoading: true, books: null}

    async componentDidMount(){
        const response = await fetch (`http://localhost:8082/api/books?delay=3000`);
        const booksi = await response.json();
   
        this.setState({...this.state, booksLoading: false, books: booksi})

    }

    render(){
        return (
            <div>
                {this.state.booksLoading ? <span>"loading"</span> : <BookItems   books={this.state.books} /> }
            </div>
        )
        
    }


}