"use strict";
import React, {Component} from 'react';
import BookListItem from './book_list_item';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map(function(book){
            return (<BookListItem key={Math.random()} book={book} />);
        });
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList);
