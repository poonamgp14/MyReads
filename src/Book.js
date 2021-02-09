import React from 'react'
import './App.css'

class Book extends React.Component {
    state = {}
    render(){
        return (
            <li key={this.props.bookInfo.name}>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url({this.props.bookInfo.imageUrl})' }}></div>
                    <div className="book-shelf-changer" ng>
                        <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{this.props.bookInfo.name}</div>
                    <div className="book-authors">{this.props.bookInfo.author}</div>
                </div>
                </li>
        )
    }
}

export default Book