"use strict";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookListItem extends Component{
    render(){
        return (
            <li className="list-group-item">Hello, I am a book. My name is "{this.props.book.title}"</li>
        );
    }
}

function mapStateToProps(state){
    return {};
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    // Whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container. It needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookListItem);
