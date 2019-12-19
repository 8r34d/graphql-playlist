import React, { Component } from 'react';
import { graphql } from '@apollo/react-hoc';
import { getBooksQuery } from '../queries/queries'

class BookList extends Component {
  displayBooks(){
    var data = this.props.data;
    if(data.loading){
      return ( <div>Loading books...</div>);
    } else {
      return data.books.map(book => {
        return ( <li key={ book.id }>{ book.name }</li> )
      });
    }
  }
  render(){
    return(
      <div>
        <ul id="book-list">
          { this.displayBooks() }
        </ul>
      </div>
    );
  }
}

// Explanation of export default graphql(getBooksQuery)(BookList);
// - Higher-Order Components
//   - https://reactjs.org/docs/higher-order-components.html
//   - https://www.apollographql.com/docs/react/api/react-hoc/

// create enhancer function
// const withGetBooksQuery = graphql(getBooksQuery);

// enhance component
// const BookListWithData = withGetBooksQuery(BookList);

// export enhanced component
// export default BookListWithData;

export default graphql(getBooksQuery)(BookList);
