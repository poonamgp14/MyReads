import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
    state = {bookCategory: 'move'}
    handleChange = (event)=>{
        console.log('i m in book')
        event.preventDefault();
        this.setState({bookCategory: event.target.value})
        BooksAPI.update(this.props.bookInfo,event.target.value).then(
            results => console.log(results)
        )
    }
    render(){
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: `url(${this.props.bookInfo.imageLinks.smallThumbnail})`
                        }}></div>
                    <div className="book-shelf-changer">
                    <form>
                        <select defaultValue={this.props.bookInfo.shelf}
                            onChange={this.handleChange}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none" disabled>None</option>
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