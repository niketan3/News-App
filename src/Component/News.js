import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { ReactPropTypes } from "react";
import PropTypes from 'prop-types'
export default class News extends Component{
  
  static propTypes={
    category:PropTypes.string,
  }
  articles = [];
  constructor() {
    super();
    
    this.state = {
      articles: this.articles,
      page: 1,
      pagesize: 5,
      loading:false
    };
  }
  async componentDidMount() {
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=b9e6453b2100468986997e6e556dab47&page=${this.state.page}&pageSize=${this.state.pagesize}&category=${this.props.category}`;
    let data = await fetch(url);
    data = await data.json();
    this.setState({ articles: data.articles ,totalResult:data.totalResult});
  }
   NextClick=async()=> {
    
    this.state.loading=true;
      this.setState({ page: this.state.page + 1 });
    
      let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=b9e6453b2100468986997e6e556dab47&page=${this.state.page}&pageSize=${this.state.pagesize}&category=${this.props.category}`;
      let data = await fetch(url);
      data = await data.json();

      this.setState({ articles: data.articles});
      this.state.loading=false;
      // console.log(data);
    
  }
   PreviousClick=async()=> {
    this.state.loading=true;
    this.setState({ page: this.state.page - 1 });
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=b9e6453b2100468986997e6e556dab47&page=${this.state.page}&pageSize=${this.state.pagesize}&category=${this.props.category}`;
    let data = await fetch(url);
    data = await data.json();
    this.setState({ articles: data.articles });
    this.state.loading=false;
  }

  render() {
    return (
      <div className="container my-3">
        
        <h2 className="text-center">News Monkey-Top Headlines</h2>
        
        {this.state.loading && <Spinner></Spinner>}

        <div className="row">
          { !this.state.loading &&  this.state.articles.map((element) => {
            return (
              <div className="col md-4 rada" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 20) : ""}
                  description={
                    element.description
                      ? element.description.slice(0, 88)
                      : "There is No Description Present for this news"
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://bgr.com/wp-content/uploads/2023/01/BGR-Deals-Of-The-Day-2023-Thursday.jpg?quality=82&strip=all"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark" disabled={this.state.page<=1}
            onClick={this.PreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.NextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    
    );
  }
}
