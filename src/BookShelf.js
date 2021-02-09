import React from 'react'
import './App.css'
import Book from './Book'

class BookShelf extends React.Component {
    state = {
        bookList : []
    }
    render(){
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {
                this.props.books.map(function(book){
                    return <Book bookInfo = {book}/>
                })
            }
            </ol>
            </div>
        </div>
        )}
}

export default BookShelf