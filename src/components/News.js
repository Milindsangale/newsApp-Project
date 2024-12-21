import React, { Component } from 'react'        /*  rce shortcut */
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
                <div className= "col-md-4"> 
                    <NewsItem title ="myTitle" description ="mydesc" imageUrl = "https://gizmodo.com/app/uploads/2024/12/BitcoinATM.jpg"/>
                </div>
                <div className= "col-md-4"> 
                    <NewsItem title ="myTitle" description ="mydesc"/>
                </div>
                <div className= "col-md-4"> 
                    <NewsItem title ="myTitle" description ="mydesc"/>
                </div>
           </div>
      </div>
    )
  }
}

export default News