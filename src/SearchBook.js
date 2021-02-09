import React from 'react'
import './App.css'
import * as api from './BooksAPI'
import Book from './Book'

class SearchBook extends React.Component {
  state = {
    query: "",
    searchResults : []
  }
  handleSearch=(event)=>{
    console.log(event)
    this.setState({query:event.target.value})
    console.log(this.state.query)
    let results = api.search(this.state.query)
    console.log(results)
    // .then(results => {
    //   console.log(results)
    //   this.setState({searchResults:results})
    // })
  }
    render(){
        return (
          <div>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                value={this.state.query}
                onChange={this.handleSearch}/>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
              {this.state.searchResults.map(function(item){
                return <Book bookInfo = {item}/>
              })}
            </ol>
            </div>
            </div>
            
        )
    }
}

export default SearchBook