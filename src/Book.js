import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
    shelfValue = this.props.bookInfo.shelf ? this.props.bookInfo.shelf : 'none'
    state = {shelfCategory: this.shelfValue}
    handleChange = (event)=>{
        console.log(this.shelfValue)
        event.preventDefault();
        this.setState({shelfCategory: event.target.value})
        BooksAPI.update(this.props.bookInfo,event.target.value)
        .then(results => {
            this.props.handleOptionSelected()
        })
    }
    render(){
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: `url(${this.props.bookInfo.imageLinks ? this.props.bookInfo.imageLinks.smallThumbnail : ''})`
                        }}></div>
                    <div className="book-shelf-changer">
                    <form>
                        <select value={this.state.shelfCategory}
                            onChange={this.handleChange}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </form>
                    </div>
                    </div>
                    <div className="book-title">{this.props.bookInfo.title ? this.props.bookInfo.title: '' }</div>
                    <div className="book-authors">{this.props.bookInfo.authors ? this.props.bookInfo.authors[0] : "Not Found"}</div>
                </div>
                </li>
        )
    }
}

export default Book