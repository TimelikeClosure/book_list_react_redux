"use strict";
import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
    render(){
        return (<div>
            {(this.props.book !== null && this.props.book.hasOwnProperty('title')) ? this.props.book.title : ''}
        </div>);
    }
}

function mapStateToProps(state = {}){
    if (state.hasOwnProperty('activeBook')){
        return {
            book: state.activeBook
        };
    }
    return {
        book: null
    };
}

export default connect(mapStateToProps)(BookDetail);
