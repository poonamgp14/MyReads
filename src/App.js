import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchBook from './SearchBook'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    screen: 'search',
    // currentlyReadingList: [],
    // wantToReadList: [],
    // readList: []
    currentlyReadingList: [{'title':'To Kill a Mockingbird<','authors':['Harper Lee'],'imageLinks':''},{'title':"Ender's Game",'author':'Orson Scott Card','imageLinks':''}],
    wantToReadList: [{'title':'1776','authors':['David McCullough'],'imageLinks':''},{'title':"Harry Potter and the Sorcerer's Stone",'authors':['J.K.Rowling'],'imageLinks':''}],
    readList: [{'title':'The Hobbit','authors':['J.R.R. Tolkien'],'imageLinks':''},{'title':"Oh, the Places You'll Go!",'authors':['Seuss'],'imageLinks':''},{'name':'The Adventures of Tom Sawyer','authors':['Mark Twain'],'imageLinks':''}]
  
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
                <BookShelf/>
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
