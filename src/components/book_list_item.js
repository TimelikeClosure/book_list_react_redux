"use strict";
import React from 'react';

function BookListItem(props){
    "use strict";
    return (
        <li className="list-group-item">Hello, I am a book. My name is "{props.book.title}"</li>
    );
}

export default BookListItem;
