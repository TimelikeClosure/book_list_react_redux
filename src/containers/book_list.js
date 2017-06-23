"use strict";

import React, {Component} from 'react';
import BookListItem from '../components/book_list_item';

class BookList extends Component {
    renderList() {
        return this.props.books.map(function(book){
            return (<BookListItem key={Math.random()} book={book}/>);
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

export default BookList;
