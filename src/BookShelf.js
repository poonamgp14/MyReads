import React from 'react'
import './App.css'
import Book from './Book'

class BookShelf extends React.Component {
    state = {
    }
    processChange = (data)=>{
        console.log('i m in BookShelf')
        console.log(data)
    }
    render(){
        return (
            <div className="bookshelf">
                {Object.keys(this.state.details).map(singleKey=>{
                    let currentShelf = this.state.details[singleKey]
                    return <div key={singleKey}>
                    <h2 className="bookshelf-title">{currentShelf.title}</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {currentShelf.list.map((book)=>{
                            return <Book bookInfo = {book} 
                            handleOptionSelected={this.processChange}
                            />
                        })}
                    
                    </ol>
                    </div> </div>
                })}
            
        </div>
        )}
}

export default BookShelf