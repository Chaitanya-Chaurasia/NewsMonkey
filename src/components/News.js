import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c5fbd10aa9894847a2e8785a2efc4e3&page=1&pageSize==${this.props.pageSize}`;
    let response = await fetch(url);
    let parsedData = await response.json();
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    if (this.state.page <= 1) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c5fbd10aa9894847a2e8785a2efc4e35&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
      let response = await fetch(url);
      let parsedData = await response.json();
      this.setState({
        page: this.state.page - 1,
        article: parsedData.articles,
      });
    }
  };

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c5fbd10aa9894847a2e8785a2efc4e35&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize} `;
      let response = await fetch(url);
      let parsedData = await response.json();
      this.setState({
        page: this.state.page + 1,
        article: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>Today's Top News</h2>
        <div className="row ">
          {this.state.article.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={!element.title ? "NULL" : element.title.slice(0, 45)}
                  description={element.description}
                  imageURL={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-around">
          <button
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
