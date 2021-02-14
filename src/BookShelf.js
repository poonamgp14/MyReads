import React from 'react'
import './App.css'
import Book from './Book'

class BookShelf extends React.Component {
    processChange = (data) => {
        this.props.updateBooksState()
    }
    render(){
        return (
            <div className="bookshelf">
                {Object.entries(this.props.bookDetails).map(([key,value],index)=>{
                    return <div key={index}>
                        <h2 className="bookshelf-title">{key}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {value.map((item,i)=>{
                                    return <Book key = {i} bookInfo = {item}
                                    handleOptionSelected={this.processChange}
                                    />
                            })}
                            </ol>
                        </div>
                    </div>
                })}
            
        </div>
        )}
}

export default BookShelf