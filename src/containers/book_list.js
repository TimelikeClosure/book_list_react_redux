"use strict";
import React, {Component} from 'react';
import BookListItem from '../components/book_list_item';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

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

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    // Whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container. It needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
