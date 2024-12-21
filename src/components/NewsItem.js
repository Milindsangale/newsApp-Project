import React, { Component } from 'react'         /* rce */

export class NewsItem extends Component {     
  
  render() {
    let {title, description ,imageUrl} = this.props;
    return (
      <div>
            <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="/sfsff"/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}.</p>
            <a href="/milind" className="btn btn-sm btn-primary">Read More</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem