import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchBook from './SearchBook'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    bookList: {}
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
        console.log(books)
        let formattedBooksList = {}
        let title = ''
        books.forEach(element => {
          title = element.shelf.replace(/([A-Z])/g, ' $1')
          .replace(/^./, function(str){ return str.toUpperCase(); })

          if (formattedBooksList.hasOwnProperty(title)){
            formattedBooksList[title].push(element)
          }else{
            formattedBooksList[title] = [element]
          }
        });
        console.log(formattedBooksList)
        this.setState({bookList: formattedBooksList});
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <SearchBook/>
            </div>
          </div>
        )}/>
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf bookDetails={this.state.bookList}/>
                {/* <BookShelf title = "Currently Reading" books={this.state.currentlyReadingList}/>
                <BookShelf title = "Want to Read" books={this.state.wantToReadList}/>
                <BookShelf title = "Read" books={this.state.readList}/> */}
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
