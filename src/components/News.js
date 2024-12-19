import React, { Component } from 'react'        /*  rce shortcut */
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
         This is news componants
         <NewsItem/>
      </div>
    )
  }
}

export default News