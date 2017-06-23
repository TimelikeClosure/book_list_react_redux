"use strict";

import React, {Component} from 'react';
import BookListItem from '../components/book_list_item';

class BookList extends Component {
    bookList(){
        const list = [];
        for (let i = 0; i < 4; i++){
            list.push({title: `Book #${i + 1}`});
        }
        return list;
    }

    renderList() {
        return this.bookList().map(function(book){
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
