import React, { Component } from 'react';
import BookList from '../containers/book_list';

export default class App extends Component {
  bookList(){
      const list = [];
      for (let i = 0; i < 4; i++){
          list.push({title: `Book #${i + 1}`});
      }
      return list;
  }

  render() {
    return (
      <div>
        <BookList books={this.bookList()}/>
      </div>
    );
  }
}
