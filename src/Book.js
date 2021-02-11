import React from 'react'
import './App.css'

class Book extends React.Component {
    state = {bookCategory: 'move'}
    handleChange = (event)=>{
        console.log('i m in book')
        event.preventDefault();
        this.setState({bookCategory: event.target.value})
        this.props.handleOptionSelected(event.target.value)
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
                        <select value = {this.state.bookCategory} onChange={this.handleChange}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none" disabled>None</option>
                        </select>
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