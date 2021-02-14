import React from 'react'
import './App.css'
import * as api from './BooksAPI'
import Book from './Book'
import { useDebounce } from 'use-debounce';


class SearchBook extends React.Component {
  state = {
    query: "",
    isSearching: false,
    searchResults : []
  }

  
  handleSearch= async (event)=>{
    let x = event.target.value
    this.setState({query: x})
    let currentShelf = this.props.currentShelf
    if (x){
      this.setState({isSearching: true})
      let results = await api.search(x)
      if (results){
      results.books.forEach(book => {
        for (const key in currentShelf){
          currentShelf[key].forEach(element => {
            if (element.id === book.id){
              book.shelf = element.shelf
              // console.log(book.shelf)
            }
          });
        }
      })
      // console.log(results)
      
      this.setState({searchResults: results.books})
    }
    this.setState({isSearching: false})
    }
  }

  processChange = ()=>{
        this.props.updateRootUrl()
  }
    render(){
        return (
          <div className="app">
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                value={this.state.query}
                onChange={this.handleSearch}/>
            </div>
            {this.state.isSearching && <div>Searching ...</div>}
            <div className="search-books-results">
            <ol className="books-grid">
              {this.state.searchResults.map((item,index)=>{
                return <div key={index}>
                  <Book bookInfo = {item} 
                  handleOptionSelected={this.processChange}
                  />
                  </div>
              })}
            </ol>
            </div>
            </div>
            
        )
    }
}

export default SearchBook