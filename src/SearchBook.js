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
    if (x){
      this.setState({isSearching: true})
      let results = await api.search(x)
      this.setState({isSearching: false})
      this.setState({searchResults: results.books})
    }
  }

  processChange = (data)=>{
    console.log('i m in process Change')
    console.log(data)
  }
    render(){
        return (
          <div>
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
                  handleOptionSelected={this.processChange}/>
                  </div>
              })}
            </ol>
            </div>
            </div>
            
        )
    }
}

export default SearchBook